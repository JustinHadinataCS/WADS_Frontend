/* eslint-disable react/prop-types */
const StatusBadge = ({ status }) => {
  const baseClasses = "px-4 py-1 rounded-full font-bold text-sm";

  const statusStyles = {
    New: "bg-blue-100 text-blue-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-gray-200 text-gray-700",
    High: "bg-red-100 text-red-700",
    Medium: "bg-orange-100 text-orange-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`${baseClasses} ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
