import SettingTitle from "./SettingTitle";
import ProfilePicture from "./ProfilePicture";
import SettingDesc from "./SettingDesc";
import Button from "../../components/app/Button";
import Input from "./Input";

const ProfileSection = () => {
  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
          Profile Settings
        </h1>
      </div>

      <div className="mb-8">
        <ProfilePicture />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <Input>First name</Input>
        </div>
        <div>
          <Input>Last name</Input>
        </div>
      </div>
      <div className="mb-6">
        <Input>Email</Input>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            This email will be used for notifications
          </p>
        </div>
      </div>
      <div className="mb-6">
        <Input>Phone Number</Input>
      </div>

      <div className="mb-6">
        <Input
          type="dropdown"
          defaultValue="-"
          options={[
            { value: "us", label: "1" },
            { value: "ca", label: "2" },
            { value: "uk", label: "3" },
          ]}
        >
          Department
        </Input>
      </div>

      <div className="mb-8">
        <Input
          type="dropdown"
          defaultValue="-"
          options={[
            { value: "", label: "1" },
            { value: "", label: "2" },
            { value: "", label: "3" },
          ]}
        >
          Time zone
        </Input>
      </div>

      <div className="flex justify-end space-x-4 w-full mt-6">
        <Button type="clear">Cancel</Button>
        <Button type="blue-s">Save changes</Button>
      </div>
    </div>
  );
};

export default ProfileSection;
