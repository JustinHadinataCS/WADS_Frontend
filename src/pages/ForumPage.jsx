import ForumList from "../features/forum/ForumList";
import ForumMessages from "../features/forum/ForumMessages";

function ForumPage() {
  return (
    <div className="flex h-full gap-x-5">
      <ForumList />
      <ForumMessages />
    </div>
  );
}

export default ForumPage;
