import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen bg-[#eef2f6]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-6 flex-1 overflow-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default MainLayout;