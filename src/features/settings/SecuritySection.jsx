import SettingTitle from "./SettingTitle";
import PasswordStrength from "./PasswordStrength";
import TwoFA from "./TwoFA";

const SecuritySection = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
                <SettingTitle title="Security Settings" />
            </div>

            <div className="space-y-6">
                <PasswordStrength />
                <TwoFA />
            </div>
        </div>
    );
}
 
export default SecuritySection;