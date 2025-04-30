import StyledLink from "./StyledLink";
import { MdDashboard } from "react-icons/md";
import { LuTicketSlash } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

function MainNav() {
  return (
    <nav className="flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-y-4 ">
        <StyledLink location="/dashboard" icon={MdDashboard}>
          Dashboard
        </StyledLink>
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

      <StyledLink location="/notifications" icon={IoIosLogOut}>
        Logout
      </StyledLink>
    </nav>
  );
}

export default MainNav;
