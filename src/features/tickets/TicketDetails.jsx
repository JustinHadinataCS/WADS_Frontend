import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useSocket } from "../../contexts/SocketContext";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { format } from "date-fns";
import PropTypes from "prop-types";

function TicketDetails({ data }) {
  const { user } = useAuthContext();
  const { socket, isConnected } = useSocket();
  const [messages, setMessages] = useState(data.messages || []);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!socket) {
      console.log("Socket not initialized");
      setError("Socket connection not available");
      return;
    }

    if (!data._id) {
      console.log("No ticket ID provided");
      return;
    }

    if (!isConnected) {
      console.log("Socket not connected, waiting for connection...");
      return;
    }

    console.log("Setting up socket listeners for ticket:", data._id);
    console.log("Socket connection state:", {
      connected: socket.connected,
      id: socket.id,
      auth: socket.auth,
      user: user,
    });

    // Join the ticket room
    socket.emit("ticket:join", data._id, (response) => {
      console.log("Ticket join response:", response);
      if (response?.error) {
        setError(response.error);
      }
    });

    // Listen for new messages
    socket.on("ticket-message", (message) => {
      console.log("Received new message:", message);
      setMessages((prev) => [...prev, message]);
      setError(null);
    });

    // Listen for errors
    socket.on("error", (error) => {
      console.error("Socket error received:", error);
      setError(error.message);
    });

    // Cleanup function
    return () => {
      console.log("Cleaning up socket listeners");
      socket.off("ticket-message");
      socket.off("error");
    };
  }, [socket, data._id, user, isConnected]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!isConnected) {
      setError("Not connected to server. Please wait...");
      return;
    }

    if (!socket.connected) {
      setError("Socket not connected. Please wait...");
      return;
    }

    setIsSending(true);
    setError(null);

    console.log("Sending message:", {
      ticketId: data._id,
      content: newMessage,
    });
    socket.emit(
      "ticket:message",
      {
        ticketId: data._id,
        content: newMessage,
      },
      (response) => {
        setIsSending(false);
        if (response?.error) {
          setError(response.error);
        } else {
          setNewMessage("");
        }
      }
    );
  };

  return (
    <div className="col-span-2 space-y-5">
      <div className="bg-white p-5 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Ticket Details
        </h3>
        <div className="space-y-1 text-sm">
          <p>
            <strong className="text-base">Category:</strong> {data.category}
          </p>
          <p>
            <strong className="text-base">Department:</strong> {data.department}
          </p>
          <p>
            <strong className="text-base">Equipment:</strong>{" "}
            {data.equipment?.name || "N/A"}
          </p>
          <p className="text-red-600">
            <strong className="text-base text-black">Priority:</strong>{" "}
            {capitalizeFirstLetter(data.priority)}
          </p>
          <p>
            <strong className="text-base">Description:</strong>{" "}
            {data.description}
          </p>
          <p>
            <strong className="text-base">Assigned To:</strong>{" "}
            {data.assignedTo.firstName} {data.assignedTo.lastName}
          </p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-white p-5 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Communication
        </h3>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {!isConnected && (
          <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md">
            Connecting to server...
          </div>
        )}
        <div className="h-96 flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-4">
                No messages yet. Start the conversation!
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender.userId === user._id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender.userId === user._id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="text-xs mb-1">
                      {message.sender.firstName} {message.sender.lastName} •{" "}
                      {format(new Date(message.createdAt), "MMM d, h:mm a")}
                    </div>
                    <div>{message.content}</div>
                  </div>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={!isConnected || isSending}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isConnected || isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Attachments */}
      <div className="bg-white p-5 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Attachments
        </h3>
        {data.attachments && data.attachments.length > 0 ? (
          <div className="space-y-2">
            {data.attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center border border-[#DDDDDD] rounded-md p-2"
              >
                <span className="mr-3">📎</span>
                <span className="text-sm">{attachment.fileName}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-sm">No attachments</div>
        )}
      </div>
    </div>
  );
}

TicketDetails.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipment: PropTypes.shape({
      name: PropTypes.string,
    }),
    assignedTo: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        sender: PropTypes.shape({
          userId: PropTypes.string.isRequired,
          firstName: PropTypes.string.isRequired,
          lastName: PropTypes.string.isRequired,
        }).isRequired,
        createdAt: PropTypes.string.isRequired,
      })
    ),
    attachments: PropTypes.arrayOf(
      PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        fileUrl: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default TicketDetails;
