import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { getRoomMessagesQueryOptions } from "../../queryoptions/getForumQuery";
import io from "socket.io-client";
import MessageInput from "./MessageInput";
import MessageArea from "./MessageArea";
import MessageHeader from "./MessageHeader";

function ForumMessages({ selectedRoomId }) {
  const { user } = useAuthContext();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  const {
    data: roomMessages,
    isLoading,
    error,
  } = useQuery(getRoomMessagesQueryOptions(user.accessToken, selectedRoomId));

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io.connect("http://localhost:5000", {
      auth: {
        token: user.accessToken,
      },
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user.accessToken]);

  // Initialize messages from the query result
  useEffect(() => {
    if (roomMessages) {
      setMessages(roomMessages);
    }
  }, [roomMessages]);

  // Listen for new messages via socket
  useEffect(() => {
    if (!selectedRoomId || !socket) return;

    // Join the room
    socket.emit("forum:join-room", selectedRoomId);

    // Listen for new messages
    socket.on("forum:message-received", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("forum:message-received");
    };
  }, [selectedRoomId, socket]);

  if (isLoading)
    return <div className="flex-1 flex flex-col">Loading messages...</div>;

  if (error)
    return (
      <div className="flex-1 flex flex-col">
        Error loading messages: {error.message}
      </div>
    );

  return (
    <>
      <div className="flex-1 flex flex-col">
        <MessageHeader
          agentName={selectedRoomId ? "Public Forum" : "Select a room"}
        />
        <MessageArea messageReceived={messages} />
        <MessageInput
          message={message}
          setMessage={setMessage}
          socket={socket}
          roomId={selectedRoomId}
          disabled={!selectedRoomId || !socket}
        />
      </div>
    </>
  );
}

export default ForumMessages;
