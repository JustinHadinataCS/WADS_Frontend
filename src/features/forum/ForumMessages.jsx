import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { getRoomMessagesQueryOptions } from "../../queryoptions/getForumQuery";
import io from "socket.io-client";
import MessageInput from "./MessageInput";
import MessageArea from "./MessageArea";
import MessageHeader from "./MessageHeader";

const socket = io.connect("http://localhost:5000");

function ForumMessages({ selectedRoomId }) {
  const { user } = useAuthContext();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const {
    data: roomMessages,
    isLoading,
    error,
  } = useQuery(getRoomMessagesQueryOptions(user.accessToken, selectedRoomId));

  // Initialize messages from the query result
  useEffect(() => {
    if (roomMessages) {
      setMessages(roomMessages);
    }
  }, [roomMessages]);

  // Listen for new messages via socket
  useEffect(() => {
    if (!selectedRoomId) return;

    // Join the room
    socket.emit("join-room", { roomId: selectedRoomId });

    // Listen for new messages
    socket.on("forum:message-received", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      // Leave the room when component unmounts or room changes
      socket.emit("leave-room", { roomId: selectedRoomId });
      socket.off("forum:message-received");
    };
  }, [selectedRoomId]);

  if (isLoading)
    return <div className="flex-1 flex flex-col">Loading messages...</div>;

  if (error)
    return (
      <div className="flex-1 flex flex-col">
        Error loading messages: {error.message}
      </div>
    );

  return (
    <div className="flex-1 flex flex-col">
      <MessageHeader
        agentName={selectedRoomId ? `Room: ${selectedRoomId}` : "Select a room"}
      />
      <MessageArea messageReceived={messages} />
      <MessageInput
        message={message}
        setMessage={setMessage}
        socket={socket}
        roomId={selectedRoomId}
        disabled={!selectedRoomId}
      />
    </div>
  );
}

export default ForumMessages;
