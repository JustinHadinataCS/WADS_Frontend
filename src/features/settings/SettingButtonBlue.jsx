const SettingButtonBlue = ({ text, className }) => {
    
    return (
      <button 
        className={`p-2 bg-[#0A3E74] h-10 rounded-md text-white hover:cursor-pointer ${className || ''}`}
      >
        {text}
      </button>
    );
  };
  
export default SettingButtonBlue;
