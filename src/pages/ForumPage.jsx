import { useState } from "react";

// Mock Chat List Component
function ChatList() {
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

// Chat Messages Component
function ChatMessages() {
  const [message, setMessage] = useState("");
  const messages = [
    {
      id: 1,
      sender: "Agent 1",
      text: "Can you help me with ticket #123456?",
      time: "10:15 AM",
    },
    {
      id: 2,
      sender: "Agent 2",
      text: "Sure, I'll take a look.",
      time: "10:16 AM",
    },
  ];

  return (
    <div className="flex-1 flex flex-col  ">
      {/* Chat Header */}
      <div className="p-4 border rounded-t-md bg-[#F5F5F5] border-[#D5D5D5] flex justify-between items-center ">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <span className="font-semibold text-[#636363]">Agent 2</span>
        </div>
      </div>

      {/* Messages Area */}
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

      {/* Message Input */}
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
    </div>
  );
}

// Main Chat Component
function ForumPage() {
  return (
    <div className="flex h-full gap-x-5">
      <ChatList />
      <ChatMessages />
    </div>
  );
}

export default ForumPage;
