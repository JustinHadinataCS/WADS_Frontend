import { useNotificationContext } from "../../contexts/NotificationContext";
import NotificationAlert from "./NotificationAlert";

function NotificationList() {
  const { Notification } = useNotificationContext();

  return (
    <div className="col-span-1">
      <h2 className="text-2xl text-gray-800 mb-5">Notifications</h2>
      <div className="bg-white rounded shadow-sm">
        {Notification.map((item, index) => (
          <NotificationAlert
            key={index}
            title={index.title}
            isRead={index.isRead}
          >
            {item.content}
          </NotificationAlert>
        ))}
      </div>
    </div>
  );
}

export default NotificationList;
