/* eslint-disable react/prop-types */
function NotificationAlert({ type, title, time, children }) {
  const typeStyles = {
    unread: { text: "text-blue-700", bg: "bg-gray-100" },
    read: { text: "text-gray-800", bg: "border-gray-300" },
  };
  const { text, bg } = typeStyles[type] || typeStyles.read;
  return (
    <div className={`p-5 border-b ${bg}`}>
      <div className="flex justify-between mb-2">
        <strong className={text}>{title}</strong>
        <span className="text-gray-600 text-sm">{time}</span>
      </div>
      <p className="text-gray-800 m-0 text-sm">{children}</p>
    </div>
  );
}

export default NotificationAlert;
