import ContentToggle from "./ContentToggle";
import SettingButtonWhite from "./SettingButtonWhite";

const TwoFA = () => {
    return ( 
        <div className="container">
            <ContentToggle text='Two-factor authentication' desc='Add an extra layer of security' />
            <div className="flex justify-center gap-30 mt-6">
            <SettingButtonWhite Text="Authenticator app" />
            <SettingButtonWhite Text="SMS verification" />
            </div>

        </div>
     );
}
 
export default TwoFA;