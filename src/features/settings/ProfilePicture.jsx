import SettingDesc from "./SettingDesc";
import ProfileImage from "./ProfileImage";
import Button from "../../components/app/Button";
const ProfilePicture = () => {
  return (
    <div className="flex items-center gap-4">
      <ProfileImage />
      <div className="flex flex-col">
        <Button type="clear" className="mb-4">
          Change Photo
        </Button>

        <SettingDesc desc="JPG or PNG. Max size 2MB" />
      </div>
    </div>
  );
};

export default ProfilePicture;
