import ProfileSection from "../features/settings/ProfileSection";
import NotificationSection from '../features/settings/NotificationSection';
import SecuritySection from '../features/settings/SecuritySection';

function Setting() {
  return (
    <div className="h-[81vh] overflow-hidden">
      <div className="h-full overflow-y-auto">
        <ProfileSection />
        <NotificationSection />
        <SecuritySection />
      </div>
    </div>
  );
}

export default Setting;
