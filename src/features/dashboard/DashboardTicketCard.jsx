/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CardTitle from "./CardTitle";
import DashboardTicketContent from "./DashboardTicketContent";

function DashboardTicketCard({ data }) {
  return (
    <div className="bg-white w-full rounded-sm shadow-md border border-neutral-200">
      <CardTitle title="Recent Tickets">
        <NavLink className="text-[#3278C9]" to="/tickets">
          View All
        </NavLink>
      </CardTitle>
      <DashboardTicketContent data={data} />
    </div>
  );
}

export default DashboardTicketCard;
