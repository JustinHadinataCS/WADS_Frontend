import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import getUsersQueryOptions from "../queryoptions/getUsersQuery";
import UserFilter from "../features/userManagement/UserFilter"
import UserTable from "../features/userManagement/UserTable";
import TicketPagination from "../features/tickets/TicketPagination";

export default function UserManagement(){
    const [currentPage, setCurrentPage] = useState(1);

    const { user } = useAuthContext();
    const { data, isLoading } = useQuery(
        getUsersQueryOptions(user.accessToken, currentPage)
    );

    const [filterRoles, setFilterRoles] = useState("all");
    const [keyword, setKeyword] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(null);

    function handleApplyFilter() {
        const filtered = data.data.filter((user) => {
        if (filterRoles === "all") return true;
        else return user.role === filterRoles;
        });

        if (keyword) {
        const filteredWithKeyword = filtered.filter((user) => {
            return (
            user.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
            user.lastName.toLowerCase().includes(keyword.toLowerCase()) ||
            user.email.toLowerCase().includes(keyword.toLowerCase()) ||
            user.role.toLowerCase().includes(keyword.toLowerCase()) ||
            user.department?.toLowerCase().includes(keyword.toLowerCase())
            );
        });
        setFilteredUsers(filteredWithKeyword);
        } else {
        setFilteredUsers(filtered);
        }
    }

    if (isLoading) return <p>Loading...</p>;

    return(
        <div className="flex flex-col gap-6 w-full h-full">
            <UserFilter
                setFilter={setFilterRoles}
                applyFilter={handleApplyFilter}
                keyword={keyword}
                setKeyword={setKeyword}
            />
            <UserTable data={filteredUsers ? filteredUsers : data.data}/>
            <TicketPagination
                data={data}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            /> 
        </div>
    )
}