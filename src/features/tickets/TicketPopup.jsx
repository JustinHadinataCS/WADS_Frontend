const TicketPopup = ({handleCancel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="bg-white rounded-sm shadow-xl w-full max-w-2xl mx-4 flex flex-col">
        <div className="bg-white text-black  px-4 py-3 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold">Submit New Ticket</h2>
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
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
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
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
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
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
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
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="attachments"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <p className="text-xs text-gray-600 mb-2">
                Drag and drop files here or
              </p>
              <button
                type="button"
                className="bg-[#1D3B5C] text-white px-3 py-2 text-xs rounded-md hover:cursor-pointer"
              >
                Browse Files
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              className="px-3 py-1 text-md text-gray-600 border border-gray-300 hover:bg-gray-100 rounded-md hover:cursor-pointer"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-md bg-[#1D3B5C] text-white rounded-md focus:outline-none hover:cursor-pointer"
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
