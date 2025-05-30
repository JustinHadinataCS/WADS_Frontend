import StyledLink from "./StyledLink";
import { MdDashboard } from "react-icons/md";
import { LuTicketSlash } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoAnalytics } from "react-icons/io5";
import { IoIosNotifications, IoIosSettings, IoIosLogOut } from "react-icons/io";
import { useAuthContext } from "../../contexts/AuthContext";

function MainNav() {

  const { user } = useAuthContext();
  return (
    <nav className="flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-y-4 ">
        <StyledLink location="/dashboard" icon={MdDashboard}>
          Dashboard
        </StyledLink>

        {user.role === "admin" && (
          <>
            <StyledLink location="/analytics" icon={IoAnalytics}>
              Analytics
            </StyledLink>
            <StyledLink location="/user-management" icon={FiUsers}>
              User Management
            </StyledLink>
          </>
        )}

        {user.role === "agent" && (
          <StyledLink location="/forum" icon={BsChatLeftText}>
            Forum Chat
          </StyledLink>
        )}

        {user.role === "user" && (
          <StyledLink location="/chatbot" icon={BsChatLeftText}>
            Support Chat
          </StyledLink>
        )}

        <StyledLink location="/tickets" icon={LuTicketSlash}>
          Tickets
        </StyledLink>
        <StyledLink location="/notifications" icon={IoIosNotifications}>
          Notifications
        </StyledLink>
        <StyledLink location="/settings" icon={IoIosSettings}>
          Settings
        </StyledLink>
      </div>

      <StyledLink location="/logout" icon={IoIosLogOut}>
        Logout
      </StyledLink>
    </nav>
  );
}

export default MainNav;
