import NotificationList from "../features/notifications/NotificationList";
import NotificationSettings from "../features/notifications/NotificationSettings";

function NotificationsPage() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <NotificationList />
      <NotificationSettings />
    </div>
  );
}

export default NotificationsPage;
