import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto relative mb-6">
      <input
        type="text"
        placeholder="Search for support, products, or solutions"
        className="w-full py-2 px-4 rounded-md shadow-md border-0 outline-none text-gray-700"
        style={{ appearance: "none", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
