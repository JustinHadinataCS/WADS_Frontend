import MiniStat from "./MiniStat"

export default function UserStatisticsContent(){
    return(
        <div className="h-72 grid grid-rows-2 p-4 items-center">
            <div className="grid grid-cols-2 text-lg">
                <MiniStat title="Total" value={198} valueColor="text-[#1D3B5C] text-3xl" className={"m-auto text-center"}/>
                <MiniStat title="Users" value={198} valueColor="text-[#1D3B5C] text-3xl" className={"m-auto text-center"}/>
            </div>

            <div className="grid grid-cols-2 text-lg">
                <MiniStat title="Agents" value={198} valueColor="text-[#1D3B5C] text-3xl" className={"m-auto text-center"}/>
                <MiniStat title="Admins" value={198} valueColor="text-[#1D3B5C] text-3xl" className={"m-auto text-center"}/>
            </div>
        </div>
    )
}