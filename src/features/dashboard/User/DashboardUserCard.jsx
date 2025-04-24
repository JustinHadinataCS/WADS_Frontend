/* eslint-disable react/prop-types */
import TicketPopup from "../../tickets/TicketPopUp";
import ButtonBlue from "../../../components/app/ButtonBlue";

function DashboardUserCard({
  buttontext,
  description,
  title,
  icon: Icon,
  handleClick,
  showPopup = false,
}) {
  console.log("Below Is show");
  console.log(showPopup);
  return (
    <div className="w-full max-w-xl h-72 py-6 px-12 bg-white shadow-md rounded-sm flex flex-wrap flex-col items-center justify-between">
      {showPopup && <TicketPopup />}
      <Icon size={50} />
      <h1 className="w-full text-center font-bold text-xl text-[#424242]">
        {title}
      </h1>
      <p className="w-full text-center text-sm text-[#636363]">{description}</p>
      <ButtonBlue Text={buttontext} handleClick={handleClick} />
    </div>
  );
}

export default DashboardUserCard;
