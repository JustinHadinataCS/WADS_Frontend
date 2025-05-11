import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getGlobalStats, getRecentActivity, getRecentTicketsGlobal, 
    getAgentPerformance, getResponseTime, getServerUptime } from "../api/dashboard";
import { useAuthContext } from "./AuthContext";

const AdminDashboardContext = createContext();

function AdminDashboardProvider({ children }) {
  const { user } = useAuthContext();

    const globalStatsQuery = useQuery({
        queryKey: ["globalStats"],
        queryFn: () => getGlobalStats(user.token),
        enabled: !!user.token,
    });

    const recentActivityQuery = useQuery({
        queryKey: ["recentActivity"],
        queryFn: () => getRecentActivity(user.token),
        enabled: !!user.token,
    });

    const recentTicketsGlobalQuery = useQuery({
        queryKey: ["recentTicketsGlobal"],
        queryFn: () => getRecentTicketsGlobal(user.token),
        enabled: !!user.token,
    });
    
    const agentPerformanceQuery = useQuery({
        queryKey: ["agentPerformance"],
        queryFn: () => getAgentPerformance(user.token),
        enabled: !!user.token,
    });
    
    const responseTimeQuery = useQuery({
        queryKey: ["responseTime"],
        queryFn: () => getResponseTime(user.token),
        enabled: !!user.token,
    });
    
    const serverUptimeQuery = useQuery({
        queryKey: ["serverUptime"],
        queryFn: () => getServerUptime(user.token),
        enabled: !!user.token,
    });
    
  return (
    <AdminDashboardContext.Provider
    value={{
        globalStats: globalStatsQuery.data,
        globalStatsLoading: globalStatsQuery.isLoading,
        globalStatsError: globalStatsQuery.error,
        refetchGlobalStats: globalStatsQuery.refetch,

        recentActivity: recentActivityQuery.data,
        recentActivityLoading: recentActivityQuery.isLoading,
        recentActivityError: recentActivityQuery.error,
        refetchRecentActivity: recentActivityQuery.refetch,

        recentTicketsGlobal: recentTicketsGlobalQuery.data,
        recentTicketsGlobalLoading: recentTicketsGlobalQuery.isLoading,
        recentTicketsGlobalError: recentTicketsGlobalQuery.error,
        refetchRecentTicketsGlobal: recentTicketsGlobalQuery.refetch,

        agentPerformance: agentPerformanceQuery.data,
        agentPerformanceLoading: agentPerformanceQuery.isLoading,
        agentPerformanceError: agentPerformanceQuery.error,
        refetchAgentPerformance: agentPerformanceQuery.refetch,

        responseTime: responseTimeQuery.data,
        responseTimeLoading: responseTimeQuery.isLoading,
        responseTimeError: responseTimeQuery.error,
        refetchResponseTime: responseTimeQuery.refetch,

        serverUptime: serverUptimeQuery.data,
        serverUptimeLoading: serverUptimeQuery.isLoading,
        serverUptimeError: serverUptimeQuery.error,
        refetchServerUptime: serverUptimeQuery.refetch,
    }}
    >
    {children}
    </AdminDashboardContext.Provider>
  );
}

function useAdminDashboardContext() {
  const context = useContext(AdminDashboardContext);
  if (!context) throw new Error("AdminDashboardContext is used outside of provider");
  return context;
}

export { useAdminDashboardContext, AdminDashboardProvider };
