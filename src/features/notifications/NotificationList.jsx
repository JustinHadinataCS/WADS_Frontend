import { useQuery } from "@tanstack/react-query";
import NotificationAlert from "./NotificationAlert";
import getNotificationsQueryOptions from "../../queryoptions/getNotificationsQuery";
import { useAuthContext } from "../../contexts/AuthContext";

function NotificationList() {
  const { user } = useAuthContext();
  const { data: notifications, isLoading } = useQuery(
    getNotificationsQueryOptions(user.token)
  );

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="col-span-1">
      <h2 className="text-2xl text-gray-800 mb-5">Notifications</h2>
      <div className="bg-white rounded shadow-sm">
        {notifications.map((item, index) => (
          <>
            <NotificationAlert
              key={index}
              title={item.title}
              isRead={item.isRead}
              timestamp={item.timestamp}
            >
              {item.content}
            </NotificationAlert>
          </>
        ))}
      </div>
    </div>
  );
}

export default NotificationList;
