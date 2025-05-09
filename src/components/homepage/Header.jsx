import { TbLogin2 } from "react-icons/tb";
function Header() {
  return (
    <header className="bg-[#155095] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/api/placeholder/24/24" alt="Semesta Logo" className="mr-2" />
        <span className="text-white font-bold">Semesta Medika Support</span>
      </div>
      <div className="flex gap-4 items-center font-bold ">
        <div className="flex items-center gap-x-1 text-white hover:underline">
          <TbLogin2 size={20} />
          <a href="#" className="text-sm ">
            Login
          </a>
        </div>

        <button className="bg-white text-[#0A3E7A] px-4 py-2 rounded-full text-sm  ">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
