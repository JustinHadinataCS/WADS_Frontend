import CardTitle from "../CardTitle"
import AgentPerformanceContent from "./AgentPerformanceContent"

export default function AgentPerformanceCard(){
    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Agent Performance"/>
            <AgentPerformanceContent/>
        </div>
    )
}