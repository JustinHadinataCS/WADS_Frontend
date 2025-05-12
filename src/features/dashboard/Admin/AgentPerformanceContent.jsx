import DonutChart from "../DonutChart"

export default function AgentPerformanceContent({ data }){
    return(
        <div className="h-72 p-4">
            <DonutChart 
            data={[
                { label: 'Agent 1', value: 60, color: '#4AC180' },
                { label: 'Agent 2', value: 25, color: '#4A81C0' },
                { label: 'Agent 3', value: 8, color: '#FFD166' },
                { label: 'Agent 4', value: 7, color: '#FF6B6B' },
            ]}/>
        </div>
    )
}