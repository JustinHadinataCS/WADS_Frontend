import ForumList from "../features/forum/ForumList";
import ForumMessages from "../features/forum/ForumMessages";

// Mock Chat List Component

// Chat Messages Component

// Main Chat Component
function ForumPage() {
  return (
    <div className="flex h-full gap-x-5">
      <ForumList />
      <ForumMessages />
    </div>
  );
}

export default ForumPage;
