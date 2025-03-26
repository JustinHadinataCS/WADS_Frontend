import { useState } from "react";

export default function Notification() {
  const notifications = [
    {
      id: 1,
      title: "Ticket #12345 Updated",
      description:
        "Support agent has replied to your ticket regarding MRI Machine Calibration.",
      time: "2 hours ago",
      link: "#",
    },
    {
      id: 2,
      title: "Ticket Status Changed",
      description: "Ticket #12345 status changed to 'In Progress'",
      time: "1 day ago",
    },
    {
      id: 3,
      title: "New Ticket Created",
      description: "Your ticket #12345 has been created successfully.",
      time: "2 days ago",
    },
  ];

  const [settings, setSettings] = useState({
    email: {
      ticketUpdates: true,
      statusChanges: true,
      resolutionNotifications: true,
    },
    inApp: {
      allUpdates: true,
      systemNotifications: true,
    },
  });

  return (
    <div className="flex gap-6 w-full">
      {/* Notifications List */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} className="border-b py-4 last:border-none">
              <a href={notif.link || "#"} className="text-blue-600 font-medium">
                {notif.title}
              </a>
              <p className="text-gray-600 text-sm mt-1">{notif.description}</p>
              <span className="text-gray-400 text-xs block mt-1">
                {notif.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notification Settings */}
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-3">
          <h3 className="text-md font-medium">Email Notifications</h3>
          {Object.keys(settings.email).map((key) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.email[key]}
                readOnly
                className="w-4 h-4"
              />
              <span className="text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <h3 className="text-md font-medium">In-App Notifications</h3>
          {Object.keys(settings.inApp).map((key) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.inApp[key]}
                readOnly
                className="w-4 h-4"
              />
              <span className="text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
            </label>
          ))}
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
