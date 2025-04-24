import DonutChart from "../DonutChart"

export default function TicketStatusContent(){
    return(
        <div className="h-72 flex flex-wrap p-4 justify-between items-center">
            <DonutChart 
            data={[
                { label: 'Resolved', value: 60, color: '#4AC180' },
                { label: 'In Progress', value: 25, color: '#4A81C0' },
                { label: 'On Hold', value: 8, color: '#FFD166' },
                { label: 'Pending', value: 7, color: '#FF6B6B' },
            ]}/>
        </div>
    )
}