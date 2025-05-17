import TableLabel from "./TableLabel";

export default function TicketsTable() {
  const tickets = [
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
    {
      id: "#12345",
      category: "MRI Machine Calibration",
      status: "Pending",
      dateCreated: "2024-02-09",
      lastUpdated: "2 days ago",
    },
  ];

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
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                  {ticket.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.dateCreated}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {ticket.lastUpdated}
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
