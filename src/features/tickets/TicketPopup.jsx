import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { createTicket } from "../../api/ticket";
import { useQueryClient } from "@tanstack/react-query";

const TicketPopup = ({ handleCancel }) => {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    category: "Inquiry",
    priority: "Low",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createTicket(user.accessToken, formData);
      // Invalidate and refetch tickets
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      queryClient.invalidateQueries({ queryKey: ["user-recent-tickets"] });
      handleCancel();
    } catch (error) {
      alert(error.message || "Failed to create ticket");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="bg-white rounded-sm shadow-xl w-full max-w-2xl mx-4 flex flex-col">
        <div className="bg-white text-black px-4 py-3 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-semibold">Submit New Ticket</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-3 flex-grow flex flex-col overflow-hidden gap-y-2"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-base font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Brief description of the issue"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
              required
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
              value={formData.category}
              onChange={handleChange}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
              required
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
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
              required
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
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Detailed description of your issue"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1D3B5C]"
              required
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
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-md bg-[#1D3B5C] text-white rounded-md focus:outline-none hover:cursor-pointer disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Ticket"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketPopup;
