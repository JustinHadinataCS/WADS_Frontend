import Header from "./Header";
import Sidebar from "./Sidebar";
import ContentContainer from "./ContentContainer";
import Main from "./Main";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <Main>
        <Header />
        <ContentContainer className="p-6 flex-1">
          <Outlet />
        </ContentContainer>
      </Main>
    </div>
  );
}

export default AppLayout;
