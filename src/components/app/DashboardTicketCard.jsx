import CardTitle from "./CardTitle"
import DashboardTicketDropdown from "./DashboardTicketDropdown"
import DashboardTicketContent from "./DashboardTicketContent"

function DashboardTicketCard(){
    return(
        <div className="bg-white w-full rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Your Tickets">
                <DashboardTicketDropdown/>
            </CardTitle>
            <DashboardTicketContent/>
        </div>
    )
}

export default DashboardTicketCard