import { FiMenu } from "react-icons/fi";
import DashboardUserDropDown from "./DashboardUserDropDown";




const DashboardNav = ({ toggleSidebar }) => {
  return (
    <div className="bg-tmt-prim/30 shadow-md p-4 flex items-center justify-between">
      <button onClick={toggleSidebar} className="text-gray-700 cursor-pointer md:hidden flex items-center space-x-2">
        <FiMenu size={24} />
        <span className="text-lg font-semibold">Dashboard</span>
      </button>
      <h1 className="text-xl font-semibold hidden md:block">Dashboard</h1>
      <DashboardUserDropDown />
    </div>
  );
};

export default DashboardNav;
