import DashboardTicketCard from "./DashboardTicketCard";
import DashboardUserCard from "./DashboardUserCard";
import { CiCirclePlus } from "react-icons/ci";
import { PiBookOpenText } from "react-icons/pi";
import { MdOutlinePhoneEnabled } from "react-icons/md";

function UserDashboard() {
    return(
        <div className="grid grid-rows-2 gap-12">
            <div>
                <DashboardTicketCard />
            </div>
            <div className="columns-3 gap-12">
                <DashboardUserCard buttontext="Create Ticket" title="Create New Ticket" description="Report a new equipment issue or support request" icon={CiCirclePlus}/>
                <DashboardUserCard buttontext="View Resources" title="Support Resources" description="Access manuals, guides, and troubleshooting docs" icon={PiBookOpenText}/>
                <DashboardUserCard buttontext="Create Ticket" title="Create Ticket" description="Report a new equipment issue or support request" icon={MdOutlinePhoneEnabled}/>
            </div>
        </div>
    );
  }
  
  export default UserDashboard;