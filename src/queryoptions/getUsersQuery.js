import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api/userManagement";

function getUsersQueryOptions(token, currentPage) {
  return queryOptions({
    queryKey: ["users", currentPage],
    queryFn: () => getUsers(token, currentPage),
  });
}

export default getUsersQueryOptions;
