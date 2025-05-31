import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
function MessageInput({ message, setMessage, socket, roomId, disabled }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!socket) return;

    const handleError = (error) => {
      console.error("Socket error in MessageInput:", error);
      setError(error.message);
    };

    socket.on("error", handleError);

    return () => {
      socket.off("error", handleError);
    };
  }, [socket]);

  function handleSubmit() {
    if (!message.trim() || !roomId || !socket) {
      console.log("Cannot send message:", { message, roomId, socket });
      return;
    }

    console.log("Sending message:", { message: message.trim(), roomId });

    try {
      socket.emit(
        "forum:send-message",
        {
          message: message.trim(),
          roomId,
        },
        (response) => {
          if (response?.error) {
            console.error("Error sending message:", response.error);
            setError(response.error);
          } else {
            console.log("Message sent successfully");
            setMessage("");
          }
        }
      );
    } catch (error) {
      console.error("Error emitting message:", error);
      setError("Failed to send message");
    }
  }

  return (
    <div className="p-4 border-t border-[#D5D5D5] bg-white">
      {error && (
        <div className="mb-2 p-2 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={disabled ? "Select a room to chat" : "Type a message..."}
          disabled={disabled}
          className="flex-1 p-2 border border-[#D5D5D5] rounded-md"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !message.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
