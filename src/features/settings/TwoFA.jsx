import ContentToggle from "./ContentToggle";
import TwoFAButton from "./TwoFAButton";

const TwoFA = () => {
    return ( 
        <div className="container">
            <ContentToggle text='Two-factor authentication' desc='Add an extra layer of security' />
            <div className="flex justify-center gap-30 mt-6">
            <TwoFAButton Text="Authenticator app" />
            <TwoFAButton Text="SMS verification" />
            </div>

        </div>
     );
}
 
export default TwoFA;