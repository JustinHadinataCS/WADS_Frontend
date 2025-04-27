import CustomerSatisfactionCard from "../../features/dashboard/CustomerSatisfactionCard"
import UserStatisticsCard from "../../features/dashboard/Admin/UserStatisticsCard"
import TicketOverviewCard from "../../features/dashboard/Admin/TicketOverviewCard"
import DashboardTicketCard from "../../features/dashboard/DashboardTicketCard"
import RecentActivityCard from "../../features/dashboard/Admin/RecentActivityCard"
import PerformanceMetricsCard from "../../features/dashboard/Admin/PerformanceMetricsCard"
import AgentPerformanceCard from "../../features/dashboard/Admin/AgentPerformanceCard"

export default function AdminDashboard(){
    const recentActivity = [
        {
          agent: "Agent 1",
          action: "resolved",
          ticketId: 2000,
          message: "Agent 1 resolved ticket ID 2000"
        },
        {
          agent: "Agent 1",
          action: "resolved",
          ticketId: 2000,
          message: "Agent 1 resolved ticket ID 2000"
        },
        {
          agent: "Agent 1",
          action: "resolved",
          ticketId: 2000,
          message: "Agent 1 resolved ticket ID 2000"
        },
        {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
          {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
          {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
          {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
          {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
          {
            agent: "Agent 1",
            action: "resolved",
            ticketId: 2000,
            message: "Agent 1 resolved ticket ID 2000"
          },
        {
          agent: "Agent 1",
          action: "resolved",
          ticketId: 2000,
          message: "Agent 1 resolved ticket ID 2000"
        }
      ];
      
    return(
        <div className="grid grid-rows-3 gap-6">
            <div className="grid grid-cols-3 gap-6">
                <div><TicketOverviewCard/></div>
                <div><UserStatisticsCard/></div>
                <div><CustomerSatisfactionCard/></div>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-6">
                <div><DashboardTicketCard role="admin"/></div>
                <div><RecentActivityCard data={recentActivity}/></div>
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-6">
                <AgentPerformanceCard/>
                <div><PerformanceMetricsCard/></div>
            </div>
        </div>
    )
}