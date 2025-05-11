const API_BASE_URL = "http://localhost:5000/api/dashboard";

/**
 * Fetch agent statistics
 * @param {string} token - The authentication token
 * @returns {Promise<Object>} The response JSON containing agent statistics for the logged in agent
 */
export const getAgentStats = async (token) => {
  const res = await fetch(`${API_BASE_URL}/agent-stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch agent statistics");
  }

  return data;
};

/**
 * Fetch agent ticket status
 * @param {string} token - The authentication token
 * @returns {Promise<Object>} The response JSON containing ticket status for the logged in agent
 */
export const getAgentTicketStatus = async (token) => {
    const res = await fetch(`${API_BASE_URL}/agent/ticket-status`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch agent ticket status");
    }
  
    return data;
  };