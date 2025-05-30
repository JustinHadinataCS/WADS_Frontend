import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

function Logout() {
  const { user, logoutFunc } = useAuthContext();
  const navigate = useNavigate();

  console.log("aa")

  useEffect(() => {
    logoutFunc(user.accessToken);              // Clear user and tokens
    navigate("/login");      // Redirect to login page
  }, [logoutFunc, navigate]);

  return <p>Logging out...</p>;
}

export default Logout;
