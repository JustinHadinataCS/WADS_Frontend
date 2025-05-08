import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage"
import BotButtonGroup from "./BotButtonGroup";

export default function ChatMessages() {
    return (
      <div className="flex-grow overflow-y-auto p-4">
        <BotMessage buttons={<BotButtonGroup/>} content="Hello! I'm your medical equipment support assistant. How can I help you today?"/>

        {/* ntar konek ke backend, trs msgnya tinggal di mapping */}
    </div>
    );
  }