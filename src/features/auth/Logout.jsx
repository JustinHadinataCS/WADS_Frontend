import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

function Logout() {
  const { user, logoutFunc } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = user.accessToken;

    logoutFunc(token);              
    navigate("/login");     
  }, []);

  return <p>Logging out...</p>;
}

export default Logout;
