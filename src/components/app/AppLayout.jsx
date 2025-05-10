import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex font-poppins h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-0 min-w-0">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
