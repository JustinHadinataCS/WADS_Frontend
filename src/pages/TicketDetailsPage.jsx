import { useState } from "react";
import TicketDetails from "../features/tickets/TicketDetails";
import ReplyBox from "../features/tickets/ReplyBox";

function TicketDetailsPage() {
  const [reply, setReply] = useState("");

  return (
    <>
      <div className="flex flex-grow">
        <div className="flex-grow ">
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

          <div className="grid grid-cols-7 gap-5">
            <div className="col-span-5 bg-white p-5 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Communication Log
              </h3>

              <div className="space-y-4 mb-5">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-blue-800">Support Agent</strong>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Hello, I&apos;ve reviewed your issue and will need some
                    additional information about the MRI machine&apos;s current
                    calibration readings.
                  </p>
                </div>

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
              <ReplyBox reply={reply} setReply={setReply} />
            </div>
            <TicketDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetailsPage;
