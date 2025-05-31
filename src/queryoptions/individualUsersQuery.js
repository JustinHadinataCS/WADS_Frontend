import { queryOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { updateUserByID, deleteUserByID } from "../api/userManagement";
import { getUsersByID } from "../api/userManagement";

export function getIndividualUsersQueryOptions(token, ID) {
  return queryOptions({
    queryKey: ["users", ID],
    queryFn: () => getUsersByID(token, ID),
  });
}

export function useUpdateUser(token, id) {
  return useMutation({
    mutationFn: (data) => updateUserByID(token, id, data),
  });
}

export function useDeleteUser(token, id) {
  return useMutation({
    mutationFn: () => deleteUserByID(token, id),
  });
}
