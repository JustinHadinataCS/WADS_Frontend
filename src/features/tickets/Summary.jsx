/* eslint-disable react/prop-types */
function Summary({ data }) {
  if (data === undefined) return <p>Loading</p>;
  return (
    <div className="text-sm text-gray-700">
      Showing {data.data.length} of {data.totalTickets} tickets
    </div>
  );
}

export default Summary;
