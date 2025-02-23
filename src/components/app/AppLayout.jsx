import Header from "../homepage/Header";
import Sidebar from "./Sidebar";
import ContentContainer from "./ContentContainer";
import Main from "./Main";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Header />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Main>
    </div>
  );
}

export default AppLayout;
