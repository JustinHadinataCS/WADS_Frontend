import SettingTitle from "./SettingTitle";
import ProfileInput from "./ProfileInput";
import ProfilePicture from "./ProfilePicture";
import SettingDesc from "./SettingDesc";
import DropdownInput from "./DropdownInput";
import Button from "../../components/app/Button";

const ProfileSection = () => {
  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <SettingTitle title="Profile Settings" />
      </div>

      <div className="mb-8">
        <ProfilePicture />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <ProfileInput text="First name" />
        </div>
        <div>
          <ProfileInput text="Last name" />
        </div>
      </div>

      <div className="mb-6">
        <ProfileInput text="Email" />
        <SettingDesc desc="This email will be used for notifications" />
      </div>

      <div className="mb-6">
        <ProfileInput text="Phone number" />
      </div>

      <div className="mb-6">
        <DropdownInput
          text="Department"
          defaultValue="-"
          options={[
            { value: "us", label: "1" },
            { value: "ca", label: "2" },
            { value: "uk", label: "3" },
          ]}
        />
      </div>

      <div className="mb-8">
        <DropdownInput
          text="Time zone"
          defaultValue="-"
          options={[
            { value: "", label: "1" },
            { value: "", label: "2" },
            { value: "", label: "3" },
          ]}
        />
      </div>

      <div className="flex justify-end space-x-4 w-full mt-6">
        <Button type="clear">Cancel</Button>
        <Button type="blue-s">Save changes</Button>
      </div>
    </div>
  );
};

export default ProfileSection;
