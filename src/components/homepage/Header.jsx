function Header() {
  return (
    <header className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/api/placeholder/40/40" alt="Semesta Logo" className="mr-2" />
        <span className="text-white font-semibold">Semesta Medika Support</span>
      </div>
      <div className="flex gap-4">
        <button className="text-white hover:underline">Login</button>
        <button className="bg-white text-blue-800 px-4 py-1 rounded-md font-medium">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
