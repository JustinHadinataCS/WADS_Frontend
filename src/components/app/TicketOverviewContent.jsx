import MiniStat from "./MiniStat"

export default function TicketOverviewContent(){
    return(
        <div className="h-72 grid grid-rows-2 p-4 items-center">
            <div className="grid grid-cols-2 text-lg">
                <MiniStat title="Total" value={198} valueColor="text-[#1D3B5C] text-3xl" className={"m-auto text-center"}/>
                <MiniStat title="Pending" value={198} valueColor="text-[#FFD166] text-3xl" className={"m-auto text-center"}/>
            </div>

            <div className="grid grid-cols-2 text-lg">
                <MiniStat title="In Progress" value={198} valueColor="text-[#4A81C0] text-3xl" className={"m-auto text-center"}/>
                <MiniStat title="Resolved" value={198} valueColor="text-[#4AC180] text-3xl" className={"m-auto text-center"}/>
            </div>
        </div>
    )
}