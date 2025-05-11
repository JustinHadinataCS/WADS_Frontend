import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getAgentStats, getAgentTicketStatus } from "../api/dashboard";
import { useAuthContext } from "./AuthContext";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const { user } = useAuthContext();

  // USER
  // AGENT
  const agentStatsQuery = useQuery({
    queryKey: ["agentStats"],
    queryFn: () => getAgentStats(user.token),
    enabled: !!user.token,
  });

  const agentTicketStatusQuery = useQuery({
    queryKey: ["agentTicketStatus"],
    queryFn: () => getAgentTicketStatus(user.token),
    enabled: !!user.token,
  });

  // ADMIN

  return (
    <DashboardContext.Provider
    value={{
        agentStats: agentStatsQuery.data,
        agentStatsLoading: agentStatsQuery.isLoading,
        agentStatsError: agentStatsQuery.error,
        refetchAgentStats: agentStatsQuery.refetch,

        agentTicketStatus: agentTicketStatusQuery.data,
        agentTicketStatusLoading: agentTicketStatusQuery.isLoading,
        agentTicketStatusError: agentTicketStatusQuery.error,
        refetchAgentTicketStatus: agentTicketStatusQuery.refetch,
    }}
    >
    {children}
    </DashboardContext.Provider>
  );
}

function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("DashboardContext is used outside of provider");
  return context;
}

export { useDashboardContext, DashboardProvider };
