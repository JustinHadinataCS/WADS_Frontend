const TicketPopup = () => {
  return (
    <div className="fixed inset-0 shadow-md bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xs shadow-xl w-full max-w-2xl mx-4 h-[90vh] flex flex-col">
        <div className="bg-white text-black  px-4 py-3 rounded-t-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold">Submit New Ticket</h2>
          <button className="text-white hover:bg-blue-700 rounded-full p-1">
            ✕
          </button>
        </div>

        <form className="p-4 space-y-3 flex-grow flex flex-col overflow-hidden gap-y-2">
          <div>
            <label
              htmlFor="subject"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Brief description of the issue"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>Inquiry</option>
              <option>Technical Support</option>
              <option>Billing</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select
              id="priority"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-bases font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              placeholder="Detailed description of your issue"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="attachments"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center">
              <p className="text-xs text-gray-600 mb-1">
                Drag and drop files here or
              </p>
              <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 text-xs rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                Browse Files
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              className="px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketPopup;
