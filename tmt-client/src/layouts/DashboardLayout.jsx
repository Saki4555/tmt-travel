import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNav from "../components/dashboard/DashboardNav";


const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close sidebar when clicking outside
  const handleContentClick = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  return (
    <div className="md:flex h-screen">
      {/* Sidebar (Collapsible + Mobile Support) */}
      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/10 md:hidden z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="md:flex-1 md:ml-64" onClick={handleContentClick}>
        <DashboardNav toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="p-6  bg-gray-100 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;






