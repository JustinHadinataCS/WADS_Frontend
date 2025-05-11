import UserDashboard from "../components/app/UserDashboard";
import AgentDashboard from "../components/app/AgentDashboard";
import AdminDashboard from "../components/app/AdminDashboard";
import { useAuthContext } from "../contexts/AuthContext";
import { DashboardProvider } from "../contexts/DashboardContext";

function Dashboard() {
  const { user } = useAuthContext();

  return (
    <DashboardProvider>
      {user.role === "admin" && <AdminDashboard />}
      {user.role === "agent" && <AgentDashboard />}
      {user.role === "user" && <UserDashboard />}
    </DashboardProvider>
  );
}

export default Dashboard;
