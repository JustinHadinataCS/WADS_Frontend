import { queryOptions } from "@tanstack/react-query";
import { getUserRecentTickets, getAgentRecentTickets } from "../api/dashboard";

function getUserRecentOptions(token) {
  return queryOptions({
    queryKey: ["user-recent-tickets"],
    queryFn: () => getUserRecentTickets(token),
  });
}

function getAgentRecentOptions(token) {
  return queryOptions({
    queryKey: ["agent-recent-tickets"],
    queryFn: () => getAgentRecentTickets(token),
  });
}

export { getUserRecentOptions, getAgentRecentOptions };