import ContentToggle from "./ContentToggle";
import Button from "../../components/app/Button";

const TwoFA = ({ enabled, onToggle }) => {
  return (
    <div className="container">
      <ContentToggle
        text="Two-factor authentication"
        desc="Add an extra layer of security"
        checked={enabled}
        onChange={onToggle}
      />
      <div className="flex justify-center gap-30 mt-6">
        <Button type="white">Authenticator App</Button>
        <Button type="white">SMS verification</Button>
      </div>
    </div>
  );
};

export default TwoFA;
