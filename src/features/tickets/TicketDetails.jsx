function TicketDetails() {
  return (
    <div className="col-span-2 space-y-5">
      <div className="bg-white p-5 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Ticket Details
        </h3>
        <div className="space-y-1 text-sm">
          <p>
            <strong className="text-base">Category:</strong> Equipment Issue
          </p>
          <p>
            <strong className="text-base">Department:</strong> Radiology
          </p>
          <p>
            <strong className="text-base">Equipment:</strong> MRI Scanner
          </p>
          <p className="text-red-600">
            <strong className="text-base text-black">Priority:</strong> High
          </p>
        </div>
      </div>

      {/* Attachments */}
      <div className="bg-white p-5 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Attachments
        </h3>
        <div className="flex items-center border border-[#DDDDDD] rounded-md p-1 ">
          <span className="mr-3">📎</span>
          <span className="text-xs">calibration_readings.pdf</span>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
