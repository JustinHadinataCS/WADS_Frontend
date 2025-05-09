import { Search } from "lucide-react";

function Hero() {
  return (
    <div className="bg-blue-800 py-10 px-4 text-center">
      <h1 className="text-white text-3xl font-bold mb-2">
        Medical Equipment Support
      </h1>
      <p className="text-white mb-6">
        Comprehensive support for healthcare professionals
      </p>
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search for support, products, or solutions"
          className="w-full py-2 px-4 rounded-md pr-10"
        />
        <button className="absolute right-2 top-2">
          <Search size={20} className="text-gray-500" />
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-4 text-white">
        <span className="text-sm">Quick Links:</span>
        <a href="#" className="text-sm hover:underline">
          Maintenance
        </a>
        <a href="#" className="text-sm hover:underline">
          Repair
        </a>
        <a href="#" className="text-sm hover:underline">
          Product Manuals
        </a>
      </div>
    </div>
  );
}

export default Hero;
