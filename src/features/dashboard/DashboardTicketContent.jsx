/* eslint-disable react/prop-types */
import { useAuthContext } from "../../contexts/AuthContext";
import { parseISO, format, formatDistanceToNow } from "date-fns";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

export default function DashboardTicketContent({ data }) {
  const { user } = useAuthContext();

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-600",
    resolved: "bg-green-100 text-green-600",
    in_progress: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="h-72 w-full p-4 overflow-y-auto">
      <div className="w-full flex-grow overflow-auto bg-white">
        <table className="min-w-full">
          <thead className="bg-white border-b border-gray-200">
            <tr className="text-left">
              {user.role === "agent" && (
                <th className="px-4 py-2 font-medium text-gray-700">
                  Submitted By
                </th>
              )}
              {user.role === "user" && (
                <th className="px-4 py-2 font-medium text-gray-700">
                  Assigned To
                </th>
              )}
              {user.role === "admin" && (
                <>
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Submitted By
                  </th>
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Assigned To
                  </th>
                </>
              )}
              <th className="px-4 py-2 font-medium text-gray-700">Category</th>
              <th className="px-4 py-2 font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 font-medium text-gray-700">
                Date Created
              </th>
              <th className="px-4 py-2 font-medium text-gray-700">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.recentTickets.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                {user.role === "agent" && (
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.submittedBy.firstName} {item.submittedBy.lastName[0]}.
                  </td>
                )}
                {user.role === "user" && (
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.assignedTo.firstName} {item.assignedTo.lastName[0]}.
                  </td>
                )}
                {user.role === "admin" && (
                  <>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.submittedBy.firstName}{" "}
                      {item.submittedBy.lastName[0]}.
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.assignedTo.firstName} {item.assignedTo.lastName[0]}.
                    </td>
                  </>
                )}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {item.category}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusColors[item.status.toLowerCase()]
                    }`}
                  >
                    {capitalizeFirstLetter(item.status)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {format(parseISO(item.createdAt), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {capitalizeFirstLetter(formatDistanceToNow(item.updatedAt))}{" "}
                  ago
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
