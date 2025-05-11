const API_BASE_URL = "http://localhost:5000/api/notifications";

/**
 * Get all notifications by user ID
 * @param {Object} Notification - The Notification data
 * @returns {Promise<Object>} The response JSON containing all the notifications
 */

export const getNotifications = async (user) => {
  const res = await fetch(`${API_BASE_URL}/users/${user.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};
