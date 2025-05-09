import { TbLogin2 } from "react-icons/tb";
function Header() {
  return (
    <header className="bg-[#155095] p-4 flex justify-between items-center">
      <div className="mr-10">
        <div className="flex">
          <p className="text-[#155095]">Hello</p>
          <p className="text-[#155095]">Hello</p>
          <p className="text-white font-bold text-xl ">
            Semesta Medika Support
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center font-semibold ">
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
