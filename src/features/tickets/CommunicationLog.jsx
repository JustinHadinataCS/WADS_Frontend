import { useState } from "react";
import ReplyBox from "./ReplyBox";

function CommunicationLog() {
  const [reply, setReply] = useState("");

  return (
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
            Hello, I&apos;ve reviewed your issue and will need some additional
            information about the MRI machine&apos;s current calibration
            readings.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <div className="flex justify-between items-center mb-2">
            <strong className="text-green-800">You</strong>
            <span className="text-gray-500 text-sm">2 days ago</span>
          </div>
          <p className="text-gray-700">
            The current calibration readings show a deviation of 0.5T from the
            expected values.
          </p>
        </div>
      </div>

      {/* Reply Box */}
      <ReplyBox reply={reply} setReply={setReply} />
    </div>
  );
}

export default CommunicationLog;
