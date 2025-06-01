import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getTicketFeedbackQueryOptions } from "../../queryOptions/getFeedbackQuery";
import { submitFeedback } from "../../api/feedback";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

function TicketFeedback({ ticketId, currentStatus }) {
  const { user } = useAuthContext();
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const { data: existingFeedback } = useQuery(
    getTicketFeedbackQueryOptions(user.accessToken, ticketId)
  );

  // Submit feedback mutation
  const { mutate: submitFeedbackMutation, isLoading: isSubmittingFeedback } =
    useMutation({
      mutationFn: ({ rating }) =>
        submitFeedback(user.accessToken, ticketId, rating),
      onSuccess: () => {
        toast.success("Feedback submitted successfully!", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#4CAF50",
            color: "#fff",
          },
        });
        setShowFeedbackForm(false);
      },
      onError: (error) => {
        toast.error(error.message || "Failed to submit feedback", {
          duration: 4000,
          position: "top-right",
          style: {
            background: "#F44336",
            color: "#fff",
          },
        });
      },
    });

  const handleFeedbackSubmit = (rating) => {
    submitFeedbackMutation({ rating });
  };

  if (user.role !== "user" || currentStatus !== "resolved") {
    return null;
  }

  if (existingFeedback) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-md">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Your Feedback
        </h4>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              existingFeedback.rating === "positive"
                ? "bg-green-100 text-green-800"
                : existingFeedback.rating === "neutral"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {existingFeedback.rating.charAt(0).toUpperCase() +
              existingFeedback.rating.slice(1)}
          </span>
        </div>
      </div>
    );
  }

  if (showFeedbackForm) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-md">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Submit Feedback
        </h4>
        <div className="flex gap-2">
          <button
            onClick={() => handleFeedbackSubmit("positive")}
            disabled={isSubmittingFeedback}
            className="flex-1 px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 disabled:opacity-50"
          >
            Positive
          </button>
          <button
            onClick={() => handleFeedbackSubmit("neutral")}
            disabled={isSubmittingFeedback}
            className="flex-1 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 disabled:opacity-50"
          >
            Neutral
          </button>
          <button
            onClick={() => handleFeedbackSubmit("negative")}
            disabled={isSubmittingFeedback}
            className="flex-1 px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 disabled:opacity-50"
          >
            Negative
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-md">
      <h4 className="text-sm font-medium text-gray-700 mb-2">
        How was your experience?
      </h4>
      <button
        onClick={() => setShowFeedbackForm(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit Feedback
      </button>
    </div>
  );
}

TicketFeedback.propTypes = {
  ticketId: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

export default TicketFeedback;
