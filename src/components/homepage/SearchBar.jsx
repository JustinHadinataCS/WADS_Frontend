function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto relative">
      <input
        type="text"
        placeholder="Search for support, products, or solutions"
        className="w-full p-4 rounded-lg text-gray-800 pr-12 bg-white shadow-lg focus:ring-2 focus:ring-[#FFD166] focus:outline-none"
      />
      <Search className="absolute right-4 top-4 text-[#4A81C0]" />
    </div>
  );
}
