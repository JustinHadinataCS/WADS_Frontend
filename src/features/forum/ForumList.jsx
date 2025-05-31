import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { getUserRoomsQueryOptions } from "../../queryoptions/getForumQuery";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

function ForumList({ onRoomSelect, selectedRoomId }) {
  const { user } = useAuthContext();
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery(getUserRoomsQueryOptions(user.accessToken));

  if (isLoading)
    return (
      <div className="w-80 bg-white border border-[#D5D5D5] h-full rounded-md p-4">
        Loading rooms...
      </div>
    );

  if (error)
    return (
      <div className="w-80 bg-white border border-[#D5D5D5] h-full rounded-md p-4">
        Error loading rooms: {error.message}
      </div>
    );

  return (
    <div className="w-80 bg-white border border-[#D5D5D5] h-full rounded-md">
      <ChatHeader />
      <div className="divide-y">
        {rooms &&
          rooms.map((room) => (
            <Message
              key={room._id}
              active={room._id === selectedRoomId}
              title={room.name || `Chat ${room._id}`}
              unreadCount={room.unreadCount || 0}
              onClick={() => onRoomSelect(room._id)}
            />
          ))}
      </div>
    </div>
  );
}

export default ForumList;
