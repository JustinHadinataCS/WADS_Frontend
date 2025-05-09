function SearchHelp() {
  return (
    <div className="py-8 px-4 max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">
        Can&apos;t find what you&apos;re looking for?
      </h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="flex-1 border rounded-l-md px-4 py-2"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchHelp;
