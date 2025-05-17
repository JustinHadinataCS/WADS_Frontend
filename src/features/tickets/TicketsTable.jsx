import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import TableLabel from "./TableLabel";
import getTicketsQueryOptions from "../../queryoptions/getTicketsQuery";
import { formatDistanceToNow } from "date-fns";

export default function TicketsTable() {
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //     {
  //       id: "#12345",
  //       category: "MRI Machine Calibration",
  //       status: "Pending",
  //       dateCreated: "2024-02-09",
  //       lastUpdated: "2 days ago",
  //     },
  //   ];
  const { user } = useAuthContext();
  const { data, isLoading } = useQuery(getTicketsQueryOptions(user.token, 1));
  if (isLoading) return <p>Loading...</p>;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full max-h-3/4 rounded-md shadow-sm overflow-auto border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white border-b border-gray-300">
          <tr>
            <TableLabel text="Ticket ID" />
            <TableLabel text="Category" />
            <TableLabel text="Status" />
            <TableLabel text="Date Created" />
            <TableLabel text="Last Updated" />
            <TableLabel text="Details" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.data.map((ticket, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                  {capitalizeFirstLetter(ticket.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {formatDistanceToNow(ticket.createdAt)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {formatDistanceToNow(ticket.updatedAt)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="bg-[#4A81C0] hover:cursor-pointer text-white px-3 py-1 rounded-md font-medium text-xs">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
