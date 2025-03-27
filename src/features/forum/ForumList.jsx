function ForumList() {
  const chats = [
    { id: 1, title: "Public Chat", unreadCount: 3, active: false },
    { id: 2, title: "Agent 2", unreadCount: 0, active: true },
  ];

  return (
    <div className="w-80 bg-white border border-[#D5D5D5] rounded-t-md rounded-b-md h-full">
      <div className="p-4 border-b  border-[#D5D5D5] bg-[#F5F5F5]">
        <h2 className="text-xl font-semibold text-[#636363]">Chats</h2>
      </div>
      <div className="divide-y">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 flex items-center cursor-pointer border-b  border-[#D5D5D5] ${
              chat.active ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">{chat.title}</span>
                {chat.unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumList;
