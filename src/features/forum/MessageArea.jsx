/* eslint-disable react/prop-types */
function MessageArea({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white border-x border-[#D5D5D5]">
      {messages.map((msg) => (
        <div key={msg.id} className="flex flex-col">
          <div className="text-xs text-gray-500 self-center mb-2">
            {msg.time}
          </div>
          <div
            className={`max-w-[70%] ${
              msg.sender === "Agent 1" ? "self-start" : "self-end"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                msg.sender === "Agent 1"
                  ? "bg-gray-200 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageArea;
