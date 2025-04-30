import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export default function TicketFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="flex w-full gap-4">
        <div className="h-10">
            <select
            className="h-full px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400"
            >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="in-progress">In progress</option>
            <option value="on-hold">On hold</option>
            <option value="closed">Closed</option>
            </select>
        </div>

        <div className="relative flex-grow">
            <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 py-2 pl-4 pr-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400"
            placeholder="Search Tickets"
            />
        </div>
      
        <button
            type="button"
            className="h-10 px-4 py-2 text-sm text-white bg-[#4A81C0] rounded-md hover:cursor-pointer focus:outline-none"
        >
            Apply Filter
        </button>
    </div>
  );
}