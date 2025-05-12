const API_BASE_URL = "http://localhost:5000/api/users";

/**
 * Fetch the authenticated user's profile
 * @param {string} token - Auth token
 * @returns {Promise<Object>}
 */
export const getUserProfile = async (token) => {
  const res = await fetch(`${API_BASE_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to load profile");

  return data;
};

/**
 * Update the authenticated user's profile
 * @param {string} token - Auth token
 * @param {Object} profileData - The new profile data
 * @returns {Promise<Object>}
 */
export const updateUserProfile = async (token, profileData) => {
  const res = await fetch(`${API_BASE_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Update failed");

  return data;
};