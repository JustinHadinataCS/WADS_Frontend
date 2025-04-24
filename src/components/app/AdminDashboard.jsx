import CustomerSatisfactionCard from "../../features/dashboard/CustomerSatisfactionCard"
import UserStatisticsCard from "../../features/dashboard/Admin/UserStatisticsCard"
import TicketOverviewCard from "../../features/dashboard/Admin/TicketOverviewCard"
import DashboardTicketCard from "../../features/dashboard/DashboardTicketCard"

export default function AdminDashboard(){
    return(
        <div className="grid grid-rows-3 gap-6">
            <div className="grid grid-cols-3 gap-6">
                <div><TicketOverviewCard/></div>
                <div><UserStatisticsCard/></div>
                <div><CustomerSatisfactionCard/></div>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-6">
                <DashboardTicketCard role="admin"/>
                <div className="bg-white rounded-xl shadow p-4 h-72">Recent Activity</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-4 h-72">Performance Metrics</div>
                <div className="bg-white rounded-xl shadow p-4 h-72">Agent Performance</div>
            </div>
        </div>
    )
}