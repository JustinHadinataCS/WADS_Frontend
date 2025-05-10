import UserDashboard from "../components/app/UserDashboard";
import AgentDashboard from "../components/app/AgentDashboard";
import AdminDashboard from "../components/app/AdminDashboard";
import { useAuthContext } from "../contexts/AuthContext";

function Dashboard() {

  const { user } = useAuthContext();
  return (
    <>
      {user.role === "admin" && <AdminDashboard />}
      {user.role === "agent" && <AgentDashboard />}
      {user.role === "user" && <UserDashboard />}
    </>
  );
}

export default Dashboard;
