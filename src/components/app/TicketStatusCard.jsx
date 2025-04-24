import CardTitle from "./CardTitle"
import TicketStatusContent from "./TicketStatusContent"

export default function TicketStatusCard(){
    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Ticket Status" />
            <TicketStatusContent/>
        </div>
    )
}