/* eslint-disable react/prop-types */
import Text from "./Text";
function MessageArea({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white border-x border-[#D5D5D5]">
      {messages.map((msg) => (
        <Text
          key={msg.id}
          sender={msg.sender}
          text={msg.text}
          time={msg.time}
        />
      ))}
    </div>
  );
}

export default MessageArea;
