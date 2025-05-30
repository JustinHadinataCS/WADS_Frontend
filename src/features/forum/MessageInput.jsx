import { FaArrowUp } from "react-icons/fa";

/* eslint-disable react/prop-types */
function MessageInput({ message, setMessage, socket, roomId, disabled }) {
  function handleSubmit() {
    if (!message.trim() || !roomId) return;

    socket.emit("forum:send-message", {
      message: message.trim(),
      roomId,
    });

    setMessage("");
  }

  return (
    <div className="p-4 border-t border-[#D5D5D5] bg-white">
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
