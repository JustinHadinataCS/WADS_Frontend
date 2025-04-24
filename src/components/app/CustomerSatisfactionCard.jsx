import CardTitle from "./CardTitle"
import CustomerSatisfactionContent from "./CustomerSatisfactionContent"

export default function CustomerSatisfactionCard(){
    return(
    <div className="bg-white rounded-sm shadow-md border border-neutral-200">
        <CardTitle title="Customer Satisfaction"/>
        <CustomerSatisfactionContent/>
    </div>
    )
}