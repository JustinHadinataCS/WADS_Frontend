import ChatHeader from "./ChatHeader";
import Message from "./Message";

function ForumList() {
  const chats = [
    { id: 1, title: "Public Chat", unreadCount: 3, active: false },
    { id: 2, title: "Agent 2", unreadCount: 0, active: true },
  ];

  return (
    <div className="w-80 bg-white border border-[#D5D5D5] rounded-t-md rounded-b-md h-full">
      <ChatHeader />
      <div className="divide-y">
        {chats.map((chat) => (
          <Message
            key={chat.id}
            active={chat.active}
            title={chat.title}
            unreadCount={chat.unreadCount}
          />
        ))}
      </div>
    </div>
  );
}

export default ForumList;
