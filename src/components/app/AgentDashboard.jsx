import StatisticsCard from "../../features/dashboard/Agent/StatisticsCard"
import CustomerSatisfactionCard from "../../features/dashboard/CustomerSatisfactionCard"
import DashboardTicketCard from "../../features/dashboard/DashboardTicketCard"
import TicketStatusCard from "../../features/dashboard/Agent/TicketStatusCard"
import { useAgentDashboardContext } from "../../contexts/AgentDashboardContext"
import { AgentDashboardProvider } from "./AgentDashboardContext";

export default function AgentDashboard() {

    const { agentStats, agentTicketStatus } = useAgentDashboardContext();
    const tempStats = {
        totalAssigned: "...",
        resolvedThisWeek: "...",
        feedbackStats: {
            "positive": 0,
            "neutral": 0,
            "negative": 0,
            "totalCount": "..."
          }
    }
    const tempTicketStatus = {
        "pending": 0,
        "in_progress": 0,
        "resolved": 0
    }

    return(
        <AgentDashboardProvider>
            <div className="grid grid-rows-2 gap-12">
                <div className="grid grid-cols-[2fr_3fr] gap-12">
                    <div><StatisticsCard stats={agentStats || tempStats}/></div>
                <div><CustomerSatisfactionCard stats={agentStats || tempStats}/></div>
            </div>

            <div className="grid grid-cols-[3fr_1fr] gap-12">
                <div><DashboardTicketCard role="agent"/></div>
                    <div><TicketStatusCard status={agentTicketStatus || tempTicketStatus}/></div>
                </div>
            </div>
        </AgentDashboardProvider>
    )
}