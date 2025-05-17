const API_BASE_URL = "http://localhost:5000/api/tickets";

/**
 * Get all Tickets by user ID
 * @param {Object} Notification - The Tickets data
 * @returns {Promise<Object>} The response JSON containing all the Tickets
 */

export const getTickets = async (token, currentPage) => {
  const res = await fetch(
    `${API_BASE_URL}?currentPage=${currentPage}&limit=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed getting Tickets");
  }
  console.log(data);
  return data;
};
