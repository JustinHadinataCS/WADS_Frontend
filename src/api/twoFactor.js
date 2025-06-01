const API_BASE_URL = "http://localhost:5000/api/2fa";

/**
 * Enable 2FA for a user
 * @returns {Promise<Object>} The response JSON containing secret to be pasted in the authenticator plugin
 */
export const enable2fa = async (token) => {
  const res = await fetch(`${API_BASE_URL}/enable`, {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to enable 2FA");
  }

  return data;
};

/**
 * Verify 2FA for enabling
 * @param {string} token - JWT token for authentication
 * @param {Object} userData - Contains the 2FA code or related info
 * @returns {Promise<Object>} The response JSON
 */
export const verify2fa = async (token, userData) => {
    const res = await fetch(`${API_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userData }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to verify 2FA");
    }

    return data;
};


/**
 * disable 2FA for a user
 * @returns {Promise<Object>} The response JSON containing secret to be pasted in the authenticator plugin
 */
export const disable2fa = async (token) => {
  const res = await fetch(`${API_BASE_URL}/disable`, {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to enable 2FA");
  }

  return data;
};