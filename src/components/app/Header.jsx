import NotificationButton from "./NotificationButton";
import PageTitle from "./PageTitle";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import UserName from "./UserName";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  let pageName = decodeURIComponent(pathSegments[1] || "");
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  const { user } = useAuthContext();

  return (
    <div className="flex justify-between bg-white text-[#424242]  p-6  border-b-[1.5px] border-[#E5E5E5]">
      <PageTitle title={pageName} />
      <div className="flex justify-center items-center gap-x-4 select-none">
        <NotificationButton />
        <UserName user={user} />
        <ProfileButton user={user} />
      </div>
    </div>
  );
}

export default Header;
