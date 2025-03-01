import Toggle from "./Toggle";
import SettingDesc from "./SettingDesc";
import Label from "./Label";

const ContentToggle = ({text, desc}) => {
    return ( 
        <div className="flex justify-between items-center py-2">
            <div className="flex-1 mr-4">
                <Label text={text} />
                <SettingDesc desc={desc}/>
            </div>
            <div className="flex-shrink-0">
                <Toggle />
            </div>
        </div>
     );
}
 
export default ContentToggle;