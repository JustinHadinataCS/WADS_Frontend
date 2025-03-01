import Label from "./Label";

const ProfileInput = ({ text, className }) => {
    return (
        <div className="mb-2">
                <Label text={text} />
            <input
                type="text"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className || ''}`}
            />
        </div>
    );
}

export default ProfileInput;