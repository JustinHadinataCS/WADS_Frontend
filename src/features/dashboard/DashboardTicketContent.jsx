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
      <div className="w-full h-full flex-grow overflow-auto bg-white">
        <table className="min-w-full h-full">
          <thead className="bg-white">
            <tr className="text-left">
              {user.role === "agent" && <th>Submitted By</th>}
              {user.role === "user" && <th>Assigned To</th>}
              {user.role === "admin" && (
                <>
                  <th>Submitted By</th>
                  <th>Assigned To</th>
                </>
              )}
              <th>Category</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.recentTickets.map((item) => (
              <tr key={item.ID}>
                {user.role === "agent" && (
                  <td>
                    {item.submittedBy.firstName} {item.submittedBy.lastName[0]}.
                  </td>
                )}
                {user.role === "user" && <td></td>}
                {user.role === "admin" && (
                  <>
                    <td>
                      {item.submittedBy.firstName}{" "}
                      {item.submittedBy.lastName[0]}.
                    </td>
                    <td></td>
                  </>
                )}
                <td>{item.category}</td>
                <td>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusColors[item.status.toLowerCase()]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{format(parseISO(item.createdAt), "yyyy-MM-dd")}</td>
                <td>
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
