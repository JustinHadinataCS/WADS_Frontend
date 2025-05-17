import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import PaginationButton from "./PaginationButton";
import ArrowButton from "./ArrowButton";

export default function TicketPagination() {
  return (
    <div className="flex rounded-md shadow-sm items-center justify-between p-6 bg-white border border-gray-300">
      <div className="text-sm text-gray-700">Showing 1-3 of 24 tickets</div>
      <div className="flex gap-3">
        <ArrowButton type="left" />
        <PaginationButton value={1} />
        <PaginationButton value={2} />
        <PaginationButton value={3} />
        <ArrowButton />
      </div>
    </div>
  );
}
