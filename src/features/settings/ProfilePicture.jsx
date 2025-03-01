import SettingDesc from "./SettingDesc";
import ProfileImage from "./ProfileImage";
import SettingButtonWhite from "./SettingButtonWhite";

const ProfilePicture = () => {
    return ( 
    <div className="flex items-center gap-4">
        <ProfileImage />
        <div className="flex flex-col">
            <SettingButtonWhite Text="Change photo" />
            <SettingDesc desc="JPG or PNG. Max size 2MB" />
        </div>
    </div>
     );
}
 
export default ProfilePicture;