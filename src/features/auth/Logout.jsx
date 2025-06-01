import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

function Logout() {
  const { user, logoutFunc, setUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user state immediately to prevent redirect to dashboard
    setUser("");

    // Perform logout in the background
    const token = user.accessToken;
    logoutFunc(token);

    // Navigate to login page
    navigate("/login");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Logging Out...</h1>
        <p className="text-gray-600">
          Please wait while we complete your logout.
        </p>
      </div>
    </div>
  );
}

export default Logout;
