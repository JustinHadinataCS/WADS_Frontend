import CardTitle from "../CardTitle"
import ResponseTimeContent from "./ResponseTimeContent"
import ButtonBlue from "../../../components/app/ButtonBlue"
import AdminDropdown from "./AdminDropdown"
import { useState } from "react"
import { useAdminDashboardContext } from "../../../contexts/AdminDashboardContext"

export default function PerformanceMetricsCard(){
    const { responseTime, responseTimeLoading, responseTimeError } = useAdminDashboardContext();

    const placeholderOptions = ["Response Time", "System Uptime"]

    const [selectedOption, setSelectedOption] = useState(placeholderOptions[0])

    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    }

    return(
        <div className="bg-white rounded-sm shadow-md border border-neutral-200">
            <CardTitle title="Performance Metrics">
                <AdminDropdown options={placeholderOptions} onChange={handleOptionChange}/>
            </CardTitle>
            {selectedOption === "Response Time" && (
                <>
                    {responseTimeLoading && <div className="p-4 text-center">Loading...</div>}
                    {responseTimeError && <div className="p-4 text-center text-red-500">Error loading data</div>}
                    {!responseTimeLoading && !responseTimeError && (
                        <ResponseTimeContent 
                            data={responseTime} 
                        />
                    )}
                </>
            )}
            {selectedOption === "System Uptime" && (
                <div className="h-72 p-4 flex items-center justify-center text-gray-500">
                    System Uptime metrics coming soon...
                </div>
            )}
        </div>
    )
}