import SatisfactionBar from "../../components/app/SatisfactionBar"
import MiniStat from "../../components/app/MiniStat"

export default function CustomerSatisfactionContent(){
    return(
        <div className="h-72 p-4 flex flex-wrap">
            <MiniStat value={256} title="Total Reviews" valueColor="text-[#1D3B5C]"/>
            <SatisfactionBar title="Positive" percentage={75} className={"bg-[#4AC180]"}/>
            <SatisfactionBar title="Neutral" percentage={20} className={"bg-[#FFD166]"}/>
            <SatisfactionBar title="Negative" percentage={5} className={"bg-[#FF6B6B]"}/>
        </div>
    )
}