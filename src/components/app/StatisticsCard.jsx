import CardTitle from "./CardTitle"
import StatisticsContent from "./StatisticsContent"

export default function StatisticsCard(){
    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Statistics" />
            <StatisticsContent totalAssigned={128} resolvedThisWeek={8}/>
        </div>
    )
}