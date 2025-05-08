import BotButton from "./BotButton";

export default function BotButtonGroup(){
    return(
        <div className="mt-4 flex gap-3">
            <BotButton content="Equipment Support"/>
            <BotButton content="Maintenance Help"/>
            <BotButton content="Create Ticket"/>
        </div>
        
    )
}