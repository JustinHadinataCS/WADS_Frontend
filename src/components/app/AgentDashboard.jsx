import StatisticsCard from "../../features/dashboard/Agent/StatisticsCard"
import CustomerSatisfactionCard from "../../features/dashboard/CustomerSatisfactionCard"
import DashboardTicketCard from "../../features/dashboard/DashboardTicketCard"
import TicketStatusCard from "../../features/dashboard/Agent/TicketStatusCard"

export default function AgentDashboard() {
    return(
        <div className="grid grid-rows-2 gap-12">
            <div className="grid grid-cols-[2fr_3fr] gap-12">
                <div><StatisticsCard/></div>
                <div><CustomerSatisfactionCard/></div>
            </div>

            <div className="grid grid-cols-[3fr_1fr] gap-12">
                <div><DashboardTicketCard role="agent"/></div>
                <div><TicketStatusCard/></div>
            </div>
        </div>
    )
}