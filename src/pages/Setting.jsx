import ProfileSection from "../features/settings/ProfileSection";
import NotificationSection from '../features/settings/NotificationSection';
import SecuritySection from '../features/settings/SecuritySection';

function Setting(){
    return (
        <div>
          <ProfileSection />
          <NotificationSection />
          <SecuritySection />
        </div>
      );
}

export default Setting;