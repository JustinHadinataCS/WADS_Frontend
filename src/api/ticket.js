const API_BASE_URL = "http://localhost:5000/api/tickets";

export const getTickets = async (token, currentPage) => {
  const res = await fetch(`${API_BASE_URL}?page=${currentPage}&limit=5`, {
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
  console.log("Tickets");
  console.log(data);
  return data;
};
