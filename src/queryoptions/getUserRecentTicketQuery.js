import { queryOptions } from "@tanstack/react-query";
import { getUserRecentTickets } from "../api/dashboard";

function getUserRecentOptions(token) {
  return queryOptions({
    queryKey: ["tickets"],
    queryFn: () => getUserRecentTickets(token),
  });
}

export default getUserRecentOptions;
