/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getAgentStats } from "../api/dashboard";
import { useAuthContext } from "./AuthContext";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const { user } = useAuthContext();

  const agentStatsQuery = useQuery({
    queryKey: ["agentStats"],
    queryFn: () => getAgentStats(user.token),
    enabled: !!user.token,
  });

  return (
    <DashboardContext.Provider
      value={{
        agentStats: agentStatsQuery.data,
        isLoading: agentStatsQuery.isLoading,
        error: agentStatsQuery.error,
        refetch: agentStatsQuery.refetch,
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
