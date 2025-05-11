const API_BASE_URL = "http://localhost:5000/api/dashboard";

/**
 * Fetch agent statistics
 * @param {string} token - The authentication token
 * @returns {Promise<Object>} The response JSON containing agent statistics
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
