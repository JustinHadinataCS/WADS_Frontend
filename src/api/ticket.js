const API_BASE_URL = "http://localhost:5000/api/tickets";

export const getTickets = async (token, currentPage) => {
  const res = await fetch(`${API_BASE_URL}?page=${currentPage}&limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed getting tickets");
  }
  return data;
};

export const getTicketsByID = async (token, ID) => {
  const res = await fetch(`${API_BASE_URL}/${ID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed getting individual ticket");
  }

  console.log("data", data);
  return data;
};

export const createTicket = async (token, ticketData) => {
  // Convert FormData to a regular object with all required fields
  const ticketObject = {
    title: ticketData.get("title"),
    category: ticketData.get("category"),
    priority: ticketData.get("priority").toLowerCase(), // Convert to lowercase to match backend enum
    description: ticketData.get("description"),
    status: "pending",
    department: ticketData.get("department"),
    equipment: {
      name: "General",
      type: "Other",
    },
    submittedBy: null, // This will be set by the backend using the token
    assignedTo: null, // This will be set by the backend
  };

  console.log("Sending ticket object:", ticketObject); // Debug log

  const res = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ticketObject),
  });

  const data = await res.json();
  console.log("Response from createTicket:", data);

  if (!res.ok) {
    throw new Error(data.message || "Failed to create ticket");
  }

  return data;
};
