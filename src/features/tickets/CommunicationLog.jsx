import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useSocket } from "../../contexts/SocketContext";
import { format } from "date-fns";
import PropTypes from "prop-types";

function CommunicationLog({ ticketId, messages: initialMessages = [] }) {
  const { user } = useAuthContext();
  const { socket, isConnected } = useSocket();
  const [messages, setMessages] = useState(initialMessages);
  const [reply, setReply] = useState("");
  const [error, setError] = useState(null);
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!socket) {
      console.log("Socket not initialized");
      setError("Socket connection not available");
      return;
    }

    if (!ticketId) {
      console.log("No ticket ID provided");
      return;
    }

    if (!isConnected) {
      console.log("Socket not connected, waiting for connection...");
      return;
    }

    console.log("Setting up socket listeners for ticket:", ticketId);
    console.log("Socket connection state:", {
      connected: socket.connected,
      id: socket.id,
      auth: socket.auth,
      user: user,
    });

    // Join the ticket room
    socket.emit("ticket:join", ticketId, (response) => {
      console.log("Ticket join response:", response);
    });

    // Listen for existing messages
    socket.on("ticket-messages", (existingMessages) => {
      console.log("Received existing messages:", existingMessages);
      setMessages(existingMessages);
      setError(null);
    });

    // Listen for new messages
    socket.on("ticket-message", (message) => {
      console.log("Received new message:", message);
      setMessages((prev) => [...prev, message]);
    });

    // Listen for errors
    socket.on("error", (error) => {
      console.error("Socket error received:", error);
      setError(error.message);
    });

    // Cleanup function
    return () => {
      console.log("Cleaning up socket listeners");
      socket.off("ticket-messages");
      socket.off("ticket-message");
      socket.off("error");
    };
  }, [socket, ticketId, user, isConnected]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!reply.trim()) return;

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

    console.log("Sending message:", { ticketId, content: reply });
    socket.emit(
      "ticket:message",
      {
        ticketId,
        content: reply,
      },
      (response) => {
        setIsSending(false);
        if (response?.error) {
          setError(response.error);
        } else {
          setReply("");
        }
      }
    );
  };

  return (
    <div className="col-span-5 bg-white p-5 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Communication Log
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {!isConnected && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md">
          {connectionAttempts > 0
            ? `Connection attempt ${connectionAttempts} failed. Retrying...`
            : "Connecting to server..."}
        </div>
      )}

      <div className="space-y-4 mb-5">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`border-l-4 pl-4 ${
                message.sender.userId === user._id
                  ? "border-green-500"
                  : "border-blue-600"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <strong
                  className={
                    message.sender.userId === user._id
                      ? "text-green-800"
                      : "text-blue-800"
                  }
                >
                  {message.sender.userId === user._id
                    ? "You"
                    : `${message.sender.firstName} ${message.sender.lastName}`}
                </strong>
                <span className="text-gray-500 text-sm">
                  {format(new Date(message.createdAt), "MMM d, h:mm a")}
                </span>
              </div>
              <p className="text-gray-700">{message.content}</p>
            </div>
          ))
        )}
      </div>

      {/* Reply Box */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
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
  );
}

CommunicationLog.propTypes = {
  ticketId: PropTypes.string.isRequired,
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
};

export default CommunicationLog;
