/* eslint-disable react/prop-types */
import TableLabel from "./TableLabel";
import { formatDistanceToNow } from "date-fns";
import { parseISO, format } from "date-fns";

export default function TicketsTable({ isLoading, data }) {
  if (isLoading) return <p>Loading...</p>;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-full max-h-3/4 rounded-md shadow-sm overflow-auto border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white border-b border-gray-300">
          <tr>
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
                {ticket.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                  {capitalizeFirstLetter(ticket.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {format(parseISO(ticket.createdAt), "yyyy-MM-dd")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {capitalizeFirstLetter(formatDistanceToNow(ticket.updatedAt))}
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
