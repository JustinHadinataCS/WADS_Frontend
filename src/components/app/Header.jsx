import NotificationButton from "./NotificationButton";
import PageTitle from "./PageTitle";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import UserName from "./UserName";

/* eslint-disable react/prop-types */
function Header() {
  return (
    <div className="flex justify-between bg-white text-[#424242]  p-6  border-b-[1.5px] border-[#E5E5E5]">
      <PageTitle />
      <div className="flex justify-center  gap-x-5">
        <SearchBar />
        <NotificationButton />
        <UserName />
        <ProfileButton />
      </div>
    </div>
  );
}

export default Header;
