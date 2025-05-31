import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../contexts/AuthContext";
import { getIndividualUsersQueryOptions, useUpdateUser, useDeleteUser } from "../queryoptions/individualUsersQuery";
import UserDetails from "../features/userManagement/UserDetails";

export default function UserDetailsPage(){
    const userID = useParams();
    const { user } = useAuthContext();
    const { data, isLoading } = useQuery(
        getIndividualUsersQueryOptions(user.accessToken, userID.id)
    );

    const { mutate: updateUser, isLoading: updating } = useUpdateUser(user.accessToken, userID.id);
    const { mutate: deleteUser, isLoading: deleting } = useDeleteUser(user.accessToken, userID.id);

    if (isLoading) return <p>Loading...</p>

    return(
        <div className="w-full h-full grid grid-rows-[2fr_3fr] lg:grid-rows-none lg:grid-cols-[1fr_3fr] gap-12">
            <div className="w-full h-full"><UserDetails user={data} updateUser={updateUser} deleteUser={deleteUser}/></div>
            <div className="w-full h-full grid grid-rows-[3fr_1fr] gap-12">
                <div className="w-full h-full bg-black"></div>
                <div className="w-full h-full bg-black"></div>
            </div>
        </div>
    )
}