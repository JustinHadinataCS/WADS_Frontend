/* eslint-disable react/prop-types */
import TableLabel from "./TableLabel";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { parseISO, format } from "date-fns";

export default function TicketsTable({ data }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const statusColors = {
    'pending':'bg-yellow-100 text-yellow-600',
    'resolved':'bg-green-100 text-green-600',
    'in_progress':'bg-blue-100 text-blue-600'
  }

  return (
    <div className="w-full flex-grow rounded-md shadow-sm overflow-auto bg-white border border-gray-300">
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
          {data.length !== 0? 
           data.map((ticket, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  statusColors[ticket.status]
                }`}>
                  {capitalizeFirstLetter(ticket.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {format(parseISO(ticket.createdAt), "yyyy-MM-dd")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {capitalizeFirstLetter(formatDistanceToNow(ticket.updatedAt))} ago
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <NavLink to={`/tickets/${ticket._id}`} className="bg-[#4A81C0] hover:cursor-pointer text-white px-3 py-1 rounded-md font-medium text-xs">
                  View
                </NavLink>
              </td>
            </tr>
          )):
            <tr> 
              <td colspan="5" className="w-full h-24 text-lg text-center text-neutral-400">No results</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}
