import DashboardTicketCard from "../../features/dashboard/DashboardTicketCard";
import DashboardUserCard from "../../features/dashboard/User/DashboardUserCard";
import getUserRecentOptions from "../../queryoptions/getUserRecentTicketQuery";
import { useAuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { CiCirclePlus } from "react-icons/ci";
import { PiBookOpenText } from "react-icons/pi";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { useState } from "react";

function UserDashboard() {
  // Ticket Popup
  const [showPopup, setShowPopup] = useState(false);
  function handlePopup() {
    setShowPopup((showPopup) => !showPopup);
  }

  // Recent ticket data
  const { user } = useAuthContext();
  const { data, isLoading } = useQuery(getUserRecentOptions(user.accessToken));

  // Wait for data to finish loading
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-rows-2 gap-12">
      <div>
        <DashboardTicketCard data={data} />
      </div> 
      <div className="columns-3 gap-12">
        <DashboardUserCard
          buttontext="Create Ticket"
          title="Create New Ticket"
          description="Report a new equipment issue or support request"
          icon={CiCirclePlus}
          showPopup={showPopup}
          handleClick={handlePopup}
        />
        <DashboardUserCard
          buttontext="View Resources"
          title="Support Resources"
          description="Access manuals, guides, and troubleshooting docs"
          icon={PiBookOpenText}
        />
        <DashboardUserCard
          buttontext="Create Ticket"
          title="Create Ticket"
          description="Report a new equipment issue or support request"
          icon={MdOutlinePhoneEnabled}
        />
      </div>
    </div>
  );
}

export default UserDashboard;
