import { queryOptions } from "@tanstack/react-query";
import { getAgentFeedbackSummary, getFeedbackForTicket } from "../api/feedback";

// Query options for agent feedback summary
function getAgentFeedbackQueryOptions(agentId) {
  return queryOptions({
    queryKey: ["feedback", "agent", agentId],
    queryFn: () => getAgentFeedbackSummary(agentId),
    enabled: !!agentId,
  });
}

// Query options for ticket feedback
function getTicketFeedbackQueryOptions(ticketId) {
  return queryOptions({
    queryKey: ["feedback", "ticket", ticketId],
    queryFn: () => getFeedbackForTicket(ticketId),
    enabled: !!ticketId,
  });
}

export { getAgentFeedbackQueryOptions, getTicketFeedbackQueryOptions };
