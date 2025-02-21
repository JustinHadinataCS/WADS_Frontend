function QuickLinks() {
  const links = ["Maintenance", "Repair", "Product Manuals"];

  return (
    <div className="flex justify-center space-x-8 mt-8">
      {links.map((link) => (
        <button
          key={link}
          className="text-[#E3EFF9] hover:text-[#FFD166] transition-colors text-lg"
        >
          {link}
        </button>
      ))}
    </div>
  );
}
