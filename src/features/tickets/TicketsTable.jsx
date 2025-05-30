/* eslint-disable react/prop-types */
import TableLabel from "./TableLabel";
import { Ticket } from "lucide-react";

export default function TicketsTable({ data }) {
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
          {data.length !== 0 ? (
            data.map((ticket, index) => <Ticket key={index} ticket={ticket} />)
          ) : (
            <tr>
              <td
                colSpan="5"
                className="w-full h-24 text-lg text-center text-neutral-400"
              >
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
