/* eslint-disable react/prop-types */
function Text({ sender, text, time }) {
  return (
    <div className="flex flex-col">
      <div className="text-xs text-gray-500 self-center mb-2">{time}</div>
      <div
        className={`max-w-[70%] ${
          sender === "Agent 1" ? "self-start" : "self-end"
        }`}
      >
        <div
          className={`p-3 rounded-lg ${
            sender === "Agent 1"
              ? "bg-gray-200 text-black"
              : "bg-blue-500 text-white"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Text;
