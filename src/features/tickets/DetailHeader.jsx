/* eslint-disable react/prop-types */
import { format, formatDistanceToNow, parseISO } from "date-fns";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function DetailHeader({ ticketData }) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-600",
    resolved: "bg-green-100 text-green-600",
    in_progress: "bg-blue-100 text-blue-600",
  };

  const formatStatus = (status) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "in_progress":
        return "In Progress";
      case "resolved":
        return "Resolved";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white p-5 rounded-md shadow-md mb-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          #{ticketData._id} - {ticketData.title}
        </h2>
        <span
          className={`px-4 py-2 font-medium rounded-md ${
            statusColors[ticketData.status]
          }`}
        >
          {formatStatus(ticketData.status)}
        </span>
      </div>
      <div className="mt-3 text-gray-600">
        Created: {format(parseISO(ticketData.createdAt), "yyyy-MM-dd")} | Last
        Updated:{" "}
        {capitalizeFirstLetter(formatDistanceToNow(ticketData.updatedAt))} ago
      </div>
    </div>
  );
}

export default DetailHeader;
