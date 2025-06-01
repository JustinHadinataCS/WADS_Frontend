import axios from "axios";
import { API_URL } from "../config";

// Get feedback summary for an agent
export const getAgentFeedbackSummary = async (agentId) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/feedback/agents/${agentId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        error: "Failed to fetch agent feedback summary",
      }
    );
  }
};

// Get feedback for a specific ticket
export const getFeedbackForTicket = async (ticketId) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/feedback/tickets/${ticketId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Failed to fetch ticket feedback" };
  }
};

// Submit feedback for a ticket
export const submitFeedback = async (ticketId, rating) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/feedback/tickets/${ticketId}`,
      { rating },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Failed to submit feedback" };
  }
};
