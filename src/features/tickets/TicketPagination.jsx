/* eslint-disable react/prop-types */
import PaginationButton from "./PaginationButton";
import ArrowButton from "./ArrowButton";
import Summary from "./Summary";

export default function TicketPagination({
  currentPage,
  setCurrentPage,
  data,
}) {
  return (
    <div className="flex rounded-md shadow-sm items-center justify-between p-6 bg-white border border-gray-300">
      <Summary data={data} />
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
