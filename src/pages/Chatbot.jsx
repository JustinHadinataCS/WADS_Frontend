import { useState } from "react";
import MessageInput from "../features/chatbot/MessageInput";
import ChatMessages from "../features/chatbot/ChatMessages";
import { ChatbotProvider } from "../contexts/ChatbotContext";

export default function Chatbot() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setMessage("");
  };

  return (
    <ChatbotProvider>
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-grow h-full">
          <ChatMessages />
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </ChatbotProvider>
  );
}
