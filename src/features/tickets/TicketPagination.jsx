/* eslint-disable react/prop-types */
import PaginationButton from "./PaginationButton";
import ArrowButton from "./ArrowButton";

export default function TicketPagination({ currentPage, setCurrentPage }) {
  return (
    <div className="flex rounded-md shadow-sm items-center justify-between p-6 bg-white border border-gray-300">
      <div className="text-sm text-gray-700">Showing 1-3 of 24 tickets</div>
      <div className="flex gap-3">
        <ArrowButton
          type="left"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PaginationButton
          value={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PaginationButton
          value={2}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PaginationButton
          value={3}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ArrowButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
