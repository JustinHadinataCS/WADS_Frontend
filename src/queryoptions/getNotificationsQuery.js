import { queryOptions } from "@tanstack/react-query";
import { getNotifications } from "../api/notification";

function getNotificationsQueryOptions(token) {
  return queryOptions({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(token),
  });
}

export default getNotificationsQueryOptions;
