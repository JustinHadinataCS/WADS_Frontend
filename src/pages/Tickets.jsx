import TicketFilters from "../features/tickets/TicketFilters";
import TicketsTable from "../features/tickets/TicketsTable";
import TicketPagination from "../features/tickets/TicketPagination";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../contexts/AuthContext";
import getTicketsQueryOptions from "../queryoptions/getTicketsQuery";
import { useState } from "react";

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuthContext();
  const { data, isLoading } = useQuery(
    getTicketsQueryOptions(user.token, currentPage)
  );
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <TicketFilters />
      <TicketsTable data={data} isLoading={isLoading} />
      <TicketPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
