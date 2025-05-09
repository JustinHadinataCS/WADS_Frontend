function Header() {
  return (
    <header className="bg-[#155095] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/api/placeholder/24/24" alt="Semesta Logo" className="mr-2" />
        <span className="text-white font-semibold">Semesta Medika Support</span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="text-white hover:underline text-sm">
          Login
        </a>
        <a
          href="#"
          className="bg-white text-blue-800 px-4 py-1 rounded-full text-sm font-medium"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}

export default Header;
