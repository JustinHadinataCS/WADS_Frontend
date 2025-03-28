import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageArea from "./MessageArea";
import MessageHeader from "./MessageHeader";

function ForumMessages() {
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
      <MessageHeader agentName="Agent 2" />
      <MessageArea messages={messages} />
      <MessageInput message={message} setMessage={setMessage} />
    </div>
  );
}

export default ForumMessages;
