import { useState } from "react";

const TicketDetailsPage = () => {
  const [reply, setReply] = useState("");

  return (
    <>
      <div className="flex flex-grow">
        {/* Main Content */}
        <div className="flex-grow ">
          {/* Ticket Header */}
          <div className="bg-white p-5 rounded-md shadow-md mb-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                #12345 - MRI Machine Calibration Issue
              </h2>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md">
                In Progress
              </span>
            </div>
            <div className="mt-3 text-gray-600">
              Created: Feb 9, 2024 | Last Updated: 2 days ago | Priority: High
            </div>
          </div>

          {/* Ticket Communication */}
          <div className="grid grid-cols-7 gap-5">
            {/* Messages Section */}
            <div className="col-span-5 bg-white p-5 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Communication Log
              </h3>

              {/* Message Thread */}
              <div className="space-y-4 mb-5">
                {/* Support Agent Message */}
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-blue-800">Support Agent</strong>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Hello, I've reviewed your issue and will need some
                    additional information about the MRI machine's current
                    calibration readings.
                  </p>
                </div>

                {/* User Message */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-green-800">You</strong>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    The current calibration readings show a deviation of 0.5T
                    from the expected values.
                  </p>
                </div>
              </div>

              {/* Reply Box */}
              <div className="border-t pt-4 border-[#DDDDDD]">
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  className="w-full p-3 border border-[#DDDDDD] rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your reply..."
                />
                <div className="flex justify-between mt-3">
                  <button className="bg-gray-100 border border-[#DDDDDD] px-4 py-2 rounded-md hover:bg-gray-200">
                    Attach Files
                  </button>
                  <button
                    disabled={!reply}
                    className="bg-blue-900 text-white px-4 py-2 rounded-md disabled:opacity-50"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Ticket Info Sidebar */}
            <div className="col-span-2 space-y-5">
              {/* Ticket Details */}
              <div className="bg-white p-5 rounded-md shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Ticket Details
                </h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong className="text-base">Category:</strong> Equipment
                    Issue
                  </p>
                  <p>
                    <strong className="text-base">Department:</strong> Radiology
                  </p>
                  <p>
                    <strong className="text-base">Equipment:</strong> MRI
                    Scanner
                  </p>
                  <p className="text-red-600">
                    <strong className="text-base text-black">Priority:</strong>{" "}
                    High
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetailsPage;
