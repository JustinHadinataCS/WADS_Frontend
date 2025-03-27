/* eslint-disable react/prop-types */
function NotificationAlert({ type, title, time, children }) {
  const textStyle = type === "unread" ? "text-blue-700" : "text-gray-800";
  const backgroundStyle = type === "unread" ? "bg-gray-100" : "border-gray-300";
  return (
    <div className={`p-5 border-b ${backgroundStyle}`}>
      <div className="flex justify-between mb-2">
        <strong className={textStyle}>{title}</strong>
        <span className="text-gray-600 text-sm">{time}</span>
      </div>
      <p className="text-gray-800 m-0 text-sm">{children}</p>
    </div>
  );
}

export default NotificationAlert;
