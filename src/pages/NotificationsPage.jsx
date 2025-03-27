import NotificationList from "../features/notifications/NotificationList";

function NotificationsPage() {
  return (
    <div className="grid grid-cols-8 gap-5">
      <NotificationList />
    </div>
  );
}

export default NotificationsPage;
