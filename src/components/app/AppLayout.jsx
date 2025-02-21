import Header from "../homepage/Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import Main from "./Main";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
