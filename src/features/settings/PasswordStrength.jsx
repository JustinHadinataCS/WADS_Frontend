import SettingDesc from "./SettingDesc";
import Label from "./Label";

const PasswordStrength = () => {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <div className="flex justify-between items-center mb-1">
        <Label text="Password" />
        <button className="text-[#0A3E74] hover:text-[#1F61AF] font-medium">
          Change
        </button>
      </div>
      
      <div className="mb-4">
        <SettingDesc desc='Last changed 2 months ago' />
      </div>
      <div className="relative h-2 w-full bg-gray-300 rounded-full mb-2">
        <div className="absolute top-0 left-0 h-2 w-4/5 bg-green-500 rounded-full"></div>
      </div>
        <SettingDesc desc='Your password strength is good' />
    </div>
  );
};

export default PasswordStrength;