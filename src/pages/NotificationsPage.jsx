function NotificationsPage() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* Notifications List */}
      <div className="col-span-8">
        <h2 className="text-2xl text-gray-800 mb-5">Notifications</h2>
        <div className="bg-white rounded shadow-sm">
          {/* Unread Notification */}
          <div className="p-5 border-b border-gray-300 bg-gray-100">
            <div className="flex justify-between mb-2">
              <strong className="text-blue-700">Ticket #12345 Updated</strong>
              <span className="text-gray-600 text-sm">2 hours ago</span>
            </div>
            <p className="text-gray-800 m-0 text-sm">
              Support agent has replied to your ticket regarding MRI Machine
              Calibration.
            </p>
          </div>
          {/* Read Notifications */}
          <div className="p-5 border-b border-gray-300">
            <div className="flex justify-between mb-2">
              <strong className="text-gray-800">Ticket Status Changed</strong>
              <span className="text-gray-600">1 day ago</span>
            </div>
            <p className="text-gray-600 m-0">
              Ticket #12345 status changed to "In Progress"
            </p>
          </div>
          <div className="p-5">
            <div className="flex justify-between mb-2">
              <strong className="text-gray-800">New Ticket Created</strong>
              <span className="text-gray-600">2 days ago</span>
            </div>
            <p className="text-gray-600 m-0">
              Your ticket #12345 has been created successfully.
            </p>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="col-span-4">
        <div className="bg-white p-5 rounded shadow-sm">
          <h3 className="text-xl text-gray-800 mt-0 mb-5 font-semibold">
            Notification Settings
          </h3>
          {/* Email Notifications */}
          <div className="mt-5">
            <h4 className=" text-gray-800 mb-2 font-semibold">
              Email Notifications
            </h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-700 mr-2"
                  defaultChecked
                />
                <span>Ticket Updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-700 mr-2"
                  defaultChecked
                />
                <span>Status Changes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-700 mr-2"
                  defaultChecked
                />
                <span>Resolution Notifications</span>
              </label>
            </div>
          </div>
          {/* In-App Notifications */}
          <div className="mt-5">
            <h4 className="text-lg text-gray-800 mb-2 font-semibold">
              In-App Notifications
            </h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-700 mr-2"
                  defaultChecked
                />
                <span>All Updates</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-700 mr-2"
                  defaultChecked
                />
                <span>System Notifications</span>
              </label>
            </div>
          </div>
          {/* Save Button */}
          <button className="w-full bg-blue-800 text-white py-2 px-4 rounded mt-5 border-none">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;
