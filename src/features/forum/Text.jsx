/* eslint-disable react/prop-types */
function Text({ sender, text, time }) {
  return (
    <div className="flex flex-col">
      <div className="text-xs text-gray-500 self-center mb-4">{time}</div>
      <div
        className={`max-w-[70%] ${
          sender === "" ? "self-end" : "self-start"
        }`}
      >
        <div
          className={`p-3 rounded-lg ${
            sender === ""
              ? "bg-[#1D3B5C] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Text;
