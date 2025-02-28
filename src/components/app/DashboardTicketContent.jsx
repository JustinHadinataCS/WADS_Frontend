function DashboardTicketContent(){

    // PLACEHOLDER DATA FOR TICKET INFO
    const placeholderData = [
        {
            ID: "#12345",
            Category: "MRI Machine Calibration",
            Status: "New",
            DateCreated: "2025-02-26",
            LastUpdated: "2 days ago"
        },
        {
            ID: "#12346",
            Category: "CT Scanner Maintenance",
            Status: "In Progress",
            DateCreated: "2025-02-24",
            LastUpdated: "4 days ago"
        },
        {
            ID: "#12347",
            Category: "X-Ray Machine Repair",
            Status: "Closed",
            DateCreated: "2025-02-20",
            LastUpdated: "1 day ago"
        },
        {
            ID: "#12348",
            Category: "Ultrasound System Update",
            Status: "On Hold",
            DateCreated: "2025-02-18",
            LastUpdated: "3 days ago"
        },
        {
            ID: "#12349",
            Category: "Ventilator Inspection",
            Status: "On Hold",
            DateCreated: "2025-02-22",
            LastUpdated: "5 days ago"
        },
        {
            ID: "#12350",
            Category: "ECG Machine Troubleshooting",
            Status: "New",
            DateCreated: "2025-02-25",
            LastUpdated: "Today"
        },
        {
            ID: "#12351",
            Category: "Blood Pressure Monitor Calibration",
            Status: "Closed",
            DateCreated: "2025-02-15",
            LastUpdated: "6 days ago"
        },
        {
            ID: "#12352",
            Category: "Defibrillator Battery Replacement",
            Status: "In Progress",
            DateCreated: "2025-02-23",
            LastUpdated: "2 days ago"
        },
        {
            ID: "#12353",
            Category: "Hospital Bed Adjustment",
            Status: "On Hold",
            DateCreated: "2025-02-17",
            LastUpdated: "4 days ago"
        },
        {
            ID: "#12354",
            Category: "Surgical Light Testing",
            Status: "New",
            DateCreated: "2025-02-27",
            LastUpdated: "Today"
        }
    ]
    // END OF PLACEHOLDER DATA 


    return(
        <div className="h-64 w-full p-4 overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left">
                        <th>Ticket ID</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {placeholderData.map((item)=>
                        <tr className="border-b border-neutral-300">
                            <td className="py-6">{item.ID}</td>
                            <td>{item.Category}</td>
                            <td>{item.Status}</td>
                            <td>{item.DateCreated}</td>
                            <td>{item.LastUpdated}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTicketContent