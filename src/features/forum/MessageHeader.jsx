/* eslint-disable react/prop-types */
function MessageHeader({ agentName }) {
  return (
    <div className="p-4 border rounded-t-md bg-[#F5F5F5] border-[#D5D5D5] flex justify-between items-center ">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <span className="font-semibold text-[#636363]">{agentName}</span>
      </div>
    </div>
  );
}

export default MessageHeader;
