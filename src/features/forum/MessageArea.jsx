/* eslint-disable react/prop-types */
import Text from "./Text";
function MessageArea({ messageReceived }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white border-x border-[#D5D5D5]">
      {messageReceived.map((msg) => (
        <Text key={msg} sender={msg} text={msg} time={msg} />
      ))}
    </div>
  );
}

export default MessageArea;
