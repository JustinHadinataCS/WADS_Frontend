import { FaArrowUp } from "react-icons/fa";

/* eslint-disable react/prop-types */
function MessageInput({ message, setMessage, socket }) {
  function handleSubmit() {
    socket.emit("forum:send-message", { message });
    setMessage("");
  }
  return (
    <div className="p-4 border-t flex items-center space-x-4 bg-white border border-[#D5D5D5] rounded-b-md">
      <div className="flex w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow rounded-l-lg text-sm border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          <button 
            onClick={handleSubmit}
            className="bg-[#1D3B5C] rounded-r-lg p-2 aspect-square w-10 text-white hover:cursor-pointer"
          >
            <FaArrowUp size={15} className="m-auto" />
          </button>
        </div>
    </div>
  );
}

export default MessageInput;
