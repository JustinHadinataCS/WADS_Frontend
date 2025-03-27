/* eslint-disable react/prop-types */
function MessageInput({ message, setMessage }) {
  return (
    <div className="p-4 border-t flex items-center space-x-4 bg-white border border-[#D5D5D5] rounded-b-md">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-2 border border-[#D5D5D5] rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Send
      </button>
    </div>
  );
}

export default MessageInput;
