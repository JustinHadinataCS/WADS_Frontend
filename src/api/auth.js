// src/api/auth.js

const API_BASE_URL = "http://localhost:5000/api/users";

/**
 * Register a new user
 * @param {Object} userData - The user registration data
 * @returns {Promise<Object>} The response JSON containing token and user info
 */
export const register = async (userData) => {
  const res = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};

/**
 * Log in a user
 * @param {Object} credentials - The login credentials (email, password)
 * @returns {Promise<Object>} The response JSON containing token and user info
 */
export const login = async (credentials) => {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};
