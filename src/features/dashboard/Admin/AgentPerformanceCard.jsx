import CardTitle from "../CardTitle"
import AgentPerformanceContent from "./AgentPerformanceContent"
import ButtonBlue from "../../../components/app/ButtonBlue"
import AdminDropdown from "./AdminDropdown"

export default function AgentPerformanceCard(){
    const placeholderTime = ["Last 7 Days", "Today", "insert data", "idk what here"]
    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Agent Performance" />
            <AgentPerformanceContent/>
        </div>
    )
}