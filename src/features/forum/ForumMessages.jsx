import { useEffect, useState } from "react";
import io from "socket.io-client";
import MessageInput from "./MessageInput";
import MessageArea from "./MessageArea";
import MessageHeader from "./MessageHeader";

const socket = io.connect("http://localhost:5000");

function ForumMessages() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);
  useEffect(() => {
    socket.on("forum:message-received", (data) =>
      setMessageReceived((state) => [...state, data.message])
    );
  }, []);

  return (
    <div className="flex-1 flex flex-col  ">
      <MessageHeader agentName="Agent 2" />
      <MessageArea messageReceived={messageReceived} />
      <MessageInput message={message} setMessage={setMessage} socket={socket} />
    </div>
  );
}

export default ForumMessages;
