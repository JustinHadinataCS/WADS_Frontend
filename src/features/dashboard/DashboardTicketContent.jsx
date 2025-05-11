import { useAuthContext } from "../../contexts/AuthContext";

export default function DashboardTicketContent({ role }) {
    const { user } = useAuthContext();

    // TEMPORARY PLACEHOLDER DATA
    const placeholderData = [
      {
        ID: "#12345",
        submittedBy: "Bobby Smith",
        assignedTo: "Agent Carter",
        Category: "MRI Machine Calibration",
        Status: "New",
        DateCreated: "2025-02-26",
        LastUpdated: "2025-02-28",
      },
      {
        ID: "#12346",
        submittedBy: "Jane Doe",
        assignedTo: "Agent Hill",
        Category: "CT Scanner Maintenance",
        Status: "In Progress",
        DateCreated: "2025-02-24",
        LastUpdated: "2025-02-26",
      },
      {
        ID: "#12347",
        submittedBy: "Michael Chen",
        assignedTo: "Agent Barnes",
        Category: "X-Ray Machine Repair",
        Status: "Closed",
        DateCreated: "2025-02-20",
        LastUpdated: "2025-02-27",
      },
      {
        ID: "#12348",
        submittedBy: "Lisa Tran",
        assignedTo: "Agent Romanoff",
        Category: "Ultrasound System Update",
        Status: "On Hold",
        DateCreated: "2025-02-18",
        LastUpdated: "2025-02-25",
      },
      {
        ID: "#12349",
        submittedBy: "Robert Vega",
        assignedTo: "Agent Hill",
        Category: "Ventilator Inspection",
        Status: "On Hold",
        DateCreated: "2025-02-22",
        LastUpdated: "2025-02-23",
      },
      {
        ID: "#12350",
        submittedBy: "Sophia Reyes",
        assignedTo: "Agent Barton",
        Category: "ECG Machine Troubleshooting",
        Status: "New",
        DateCreated: "2025-02-25",
        LastUpdated: "2025-02-28",
      },
      {
        ID: "#12351",
        submittedBy: "Ethan Clark",
        assignedTo: "Agent Wilson",
        Category: "Blood Pressure Monitor Calibration",
        Status: "Closed",
        DateCreated: "2025-02-15",
        LastUpdated: "2025-02-21",
      },
      {
        ID: "#12352",
        submittedBy: "Nina Patel",
        assignedTo: "Agent Danvers",
        Category: "Defibrillator Battery Replacement",
        Status: "In Progress",
        DateCreated: "2025-02-23",
        LastUpdated: "2025-02-27",
      },
      {
        ID: "#12353",
        submittedBy: "John Doe",
        assignedTo: "Agent Murdock",
        Category: "Hospital Bed Adjustment",
        Status: "On Hold",
        DateCreated: "2025-02-17",
        LastUpdated: "2025-02-26",
      },
      {
        ID: "#12354",
        submittedBy: "Bobby Smith",
        assignedTo: "Agent Carter",
        Category: "Surgical Light Testing",
        Status: "New",
        DateCreated: "2025-02-27",
        LastUpdated: "2025-02-28",
      },
      {
        ID: "#12355",
        submittedBy: "Emily Davis",
        assignedTo: "Agent Wilson",
        Category: "Patient Monitor Configuration",
        Status: "Resolved",
        DateCreated: "2025-02-16",
        LastUpdated: "2025-02-18",
      },
      {
        ID: "#12356",
        submittedBy: "Carlos Romero",
        assignedTo: "Agent Romanoff",
        Category: "Infusion Pump Issue",
        Status: "In Progress",
        DateCreated: "2025-02-19",
        LastUpdated: "2025-02-26",
      },
      {
        ID: "#12357",
        submittedBy: "Zara Khan",
        assignedTo: "Agent Barton",
        Category: "Operating Table Maintenance",
        Status: "Pending",
        DateCreated: "2025-02-21",
        LastUpdated: "2025-02-25",
      },
      {
        ID: "#12358",
        submittedBy: "Liam Parker",
        assignedTo: "Agent Murdock",
        Category: "Sterilizer Fault",
        Status: "Closed",
        DateCreated: "2025-02-12",
        LastUpdated: "2025-02-20",
      },
      {
        ID: "#12359",
        submittedBy: "Grace Li",
        assignedTo: "Agent Danvers",
        Category: "Suction Machine Repair",
        Status: "Resolved",
        DateCreated: "2025-02-10",
        LastUpdated: "2025-02-15",
      },
    ];
    
    // END OF PLACEHOLDER DATA
  

    const sorted = placeholderData
    .sort((a, b) => new Date(b.LastUpdated) - new Date(a.LastUpdated))
    .slice(0, 5);

  return (
    <div className="h-72 w-full p-4 overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Ticket ID</th>
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
        <tbody>
          {sorted.map((item) => (
            <tr key={item.ID} className="border-b border-neutral-200">
              <td className="py-4">{item.ID}</td>
              {user.role === "agent" && <td>{item.submittedBy}</td>}
              {user.role === "user" && <td>{item.assignedTo}</td>}
              {user.role === "admin" && (
                <>
                  <td>{item.submittedBy}</td>
                  <td>{item.assignedTo}</td>
                </>
              )}
              <td>{item.Category}</td>
              <td>{item.Status}</td>
              <td>{item.DateCreated}</td>
              <td>{item.LastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}