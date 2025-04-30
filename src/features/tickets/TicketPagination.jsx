import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export default function TicketPagination(){
    return(
        <div className="flex rounded-md shadow-sm items-center justify-between p-6 bg-white border border-gray-300">
            <div className="text-sm text-gray-700">
                Showing 1-3 of 24 tickets
            </div>
            <div className="flex gap-3">
                <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-neutral-200 hover:cursor-pointer text-sm font-medium rounded-md text-gray-700">
                <MdNavigateBefore size={25}/>
                </button>
                <button className="px-3 py-1 border border-gray-300 bg-[#4A81C0] hover:cursor-pointer text-sm font-medium rounded-md text-white">
                1
                </button>
                <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-neutral-200 hover:cursor-pointer text-sm font-medium rounded-md text-gray-700">
                2
                </button>
                <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-neutral-200 hover:cursor-pointer text-sm font-medium rounded-md text-gray-700">
                3
                </button>
                <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-neutral-200 hover:cursor-pointer text-sm font-medium rounded-md text-gray-700">
                <MdNavigateNext size={25}/>
                </button>
            </div>
        </div>
    )
}