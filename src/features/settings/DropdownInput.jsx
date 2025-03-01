import Label from "./Label";

const DropdownInput = ({ text, className, options = [], defaultValue = "" }) => {
    return (
        <div className="mb-2">
            <Label text={text} />
            <select
                defaultValue={defaultValue}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className || ''}`}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownInput;
