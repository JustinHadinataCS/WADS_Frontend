import TicketFilters from "../features/tickets/TicketFilters"
import TicketsTable from "../features/tickets/TicketsTable"
import TicketPagination from "../features/tickets/TicketPagination"

export default function Tickets(){
    return(
        <div className="flex flex-wrap flex-col gap-6 w-full h-full">
            <TicketFilters/>
            <TicketsTable/>
            <TicketPagination/>
        </div>
    )
}