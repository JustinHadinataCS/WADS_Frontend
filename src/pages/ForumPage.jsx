import { useState } from "react";
import ForumList from "../features/forum/ForumList";
import ForumMessages from "../features/forum/ForumMessages";

function ForumPage() {
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  return (
    <div className="flex h-full gap-x-5">
      <ForumList
        onRoomSelect={setSelectedRoomId}
        selectedRoomId={selectedRoomId}
      />
      <ForumMessages selectedRoomId={selectedRoomId} />
    </div>
  );
}

export default ForumPage;
