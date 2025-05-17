/* eslint-disable react/prop-types */
function PaginationButton({ value }) {
  return (
    <button className="px-3 py-1 border border-gray-300 bg-[#4A81C0] hover:cursor-pointer text-sm font-medium rounded-md text-white">
      {value}
    </button>
  );
}

export default PaginationButton;
