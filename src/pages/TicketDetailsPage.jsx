import { useState } from "react";
import TicketDetails from "../features/tickets/TicketDetails";
import ReplyBox from "../features/tickets/ReplyBox";

function TicketDetailsPage() {
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
            <TicketDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetailsPage;
