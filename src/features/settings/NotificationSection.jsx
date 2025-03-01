import SettingTitle from "./SettingTitle";
import NotificationSubtitle from "./NotificationSubtitle";
import ContentToggle from "./ContentToggle";
import ButtonBlue from "../../components/app/ButtonBlue";



const NotificationSection = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
                <SettingTitle title="Notification Settings" />
            </div>

            <div className="mb-6">
                <NotificationSubtitle text="Email Notifications" />
                <div className="space-y-4 mt-4">
                    <ContentToggle 
                        text="Ticket Status Updates" 
                        desc="Receive updates when ticket status changes" 
                    />
                    <ContentToggle 
                        text="New Agent Responses" 
                        desc="Get notified when agents reply to your tickets"
                    />
                    <ContentToggle 
                        text="Ticket Resolution" 
                        desc="Receive confirmation when tickets are resolved"
                    />
                    <ContentToggle 
                        text="Marketing Updates" 
                        desc="Receive newsletters and promotional content"
                    />
                </div>
            </div>

            <div className="mb-8">
                <NotificationSubtitle text="In-App Notifications" />
                <div className="space-y-4 mt-4">
                    <ContentToggle 
                        text="Desktop Notifications" 
                        desc="Show notifications on your desktop"
                    />
                    <ContentToggle 
                        text="Sound Notifications" 
                        desc="Play a sound for new notifications"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <ButtonBlue Text="Save Preferences" />
         
            </div>
        </div>
    );
}

export default NotificationSection;