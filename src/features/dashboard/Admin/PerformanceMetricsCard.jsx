import CardTitle from "../CardTitle"
import PerformanceMetricsContent from "./PerformanceMetricContent"
import ButtonBlue from "../../../components/app/ButtonBlue"
import AdminDropdown from "./AdminDropdown"

export default function PerformanceMetricsCard(){

    const placeholderOptions = ["Response Time", "insert data", "insert data", "idk what here"]
    const placeholderTime = ["Last 7 Days", "Today", "insert data", "idk what here"]

    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Performance Metrics">
                <AdminDropdown options={placeholderOptions}/>
                <AdminDropdown options={placeholderTime}/>
                <ButtonBlue Text="Apply Filter"/>
            </CardTitle>
            <PerformanceMetricsContent/>
        </div>
    )
}