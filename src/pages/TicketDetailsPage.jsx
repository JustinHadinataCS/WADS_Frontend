import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { parseISO, format } from "date-fns";
import TicketDetails from "../features/tickets/TicketDetails";
import getIndividualTicketsQueryOptions from "../queryoptions/getIndividualTicketsQuery";
import { useAuthContext } from "../contexts/AuthContext";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import CommunicationLog from "../features/tickets/CommunicationLog";

function TicketDetailsPage() {
  const ticketID = useParams();
  const { user } = useAuthContext();
  const { data, isLoading } = useQuery(
    getIndividualTicketsQueryOptions(user.accessToken, ticketID.id)
  );

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-600",
    resolved: "bg-green-100 text-green-600",
    in_progress: "bg-blue-100 text-blue-600",
  };

  if (isLoading) return <p>Loading...</p>;

  const ticketData = data.data;

  return (
    <>
      <div className="flex flex-grow">
        <div className="flex-grow ">
          <div className="bg-white p-5 rounded-md shadow-md mb-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                #12345 - {ticketData.title}
              </h2>
              <span
                className={`px-4 py-2 font-medium rounded-md ${
                  statusColors[ticketData.status]
                }`}
              >
                {capitalizeFirstLetter(ticketData.status)}
              </span>
            </div>
            <div className="mt-3 text-gray-600">
              Created: {format(parseISO(ticketData.createdAt), "yyyy-MM-dd")} |
              Last Updated:{" "}
              {capitalizeFirstLetter(formatDistanceToNow(ticketData.updatedAt))}{" "}
              ago
            </div>
          </div>

          <div className="grid grid-cols-7 gap-5">
            <CommunicationLog />
            <TicketDetails data={ticketData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketDetailsPage;
