import MessageInput from "../features/chatbot/MessageInput";
import ChatMessages from "../features/chatbot/ChatMessages";
import { ChatbotProvider } from "../contexts/ChatbotContext";

export default function Chatbot() {
  return (
    <ChatbotProvider>
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-grow h-full">
          <ChatMessages />
          <MessageInput/>
        </div>
      </div>
    </ChatbotProvider>
  );
}
