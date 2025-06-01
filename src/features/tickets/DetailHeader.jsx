/* eslint-disable react/prop-types */
import { format, formatDistanceToNow, parseISO } from "date-fns";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function DetailHeader({ ticketData, formatStatus, statusColors }) {
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
