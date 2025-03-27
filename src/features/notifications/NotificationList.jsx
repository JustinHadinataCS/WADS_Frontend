import NotificationAlert from "./NotificationAlert";

function NotificationList() {
  return (
    <div className="col-span-8">
      <h2 className="text-2xl text-gray-800 mb-5">Notifications</h2>
      <div className="bg-white rounded shadow-sm">
        <NotificationAlert
          title="Ticket #12345 Updated"
          time="2 hours ago"
          type="unread"
        >
          Support agent has replied to your ticket regarding MRI Machine
          Calibration.
        </NotificationAlert>
        <NotificationAlert title="Ticket #12345 Updated" time="1 day ago">
          Ticket #12345 status changed to "In Progress"
        </NotificationAlert>
        <NotificationAlert title="New Ticket Created" time="2 day ago">
          Your ticket #12345 has been created successfully.
        </NotificationAlert>
        {/* Read Notifications */}
      </div>
    </div>
  );
}

export default NotificationList;
