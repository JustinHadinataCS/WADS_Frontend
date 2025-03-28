// eslint-disable-next-line react/prop-types
export default function ButtonBlue({ Text, handleClick }) {
  return (
    <button
      className="p-2 bg-[#0A3E74] h-10 rounded-md text-white mx-auto hover:cursor-pointer"
      onClick={handleClick}
    >
      {Text}
    </button>
  );
}
