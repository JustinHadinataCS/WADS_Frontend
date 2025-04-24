import CardTitle from "../CardTitle"
import PerformanceMetricsContent from "./PerformanceMetricContent"

export default function PerformanceMetricsCard(){
    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Performance Metrics"/>
            <PerformanceMetricsContent/>
        </div>
    )
}