import { useEffect } from "react";
import NotificationList from "../features/notifications/NotificationList";
import { useNotificationContext } from "../contexts/NotificationContext";

function NotificationsPage() {
  const { getNotifications } = useNotificationContext();

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);
  return (
    <div className="grid grid-cols-1 gap-5">
      <NotificationList />
    </div>
  );
}

export default NotificationsPage;
