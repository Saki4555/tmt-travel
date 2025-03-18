import { Link, NavLink } from "react-router";
import { FiHome, FiSettings, FiX, FiPlusCircle } from "react-icons/fi";
import { logo } from "../../assets";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0  z-20 bg-[#213555] text-white/90 w-64 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }  md:translate-x-0 md:w-64`}
    >
      {/* Close Button (Only for Small Screens) */}
      <div className="p-4 flex items-center justify-between border-b border-b-gray-500">
        <Link to="/" className="flex gap-2">
        <img src={logo} alt='TMT Travel' className="w-7"/>
          <h1 className="text-lg font-bold font-jost">TMT Travel</h1>
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-white md:hidden cursor-pointer"
        >
          <FiX size={24} />
        </button>
      </div>

      <nav className="mt-16">
        <ul className="space-y-4">
          {/* <li>
            <Link to="/" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700">
              <FiHome size={20} />
              <span>Home</span>
            </Link>
          </li> */}
          <li>
            <NavLink
              to="/dashboard/add-images"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 ${
                  isActive ? "bg-gray-800 text-tmt-prim" : ""
                }`
              }
            >
              <FiPlusCircle size={20} />
              <span>Add & Manage Images</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-deals"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 ${
                  isActive ? "bg-gray-800 text-tmt-prim" : ""
                }`
              }
            >
              <FiPlusCircle size={20} />
              <span>Add Deals</span>
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/dashboard/manage-deals"
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 ${
                  isActive ? "bg-gray-800 text-tmt-prim" : ""
                }`
              }
            >
              <FiSettings size={20} />
              <span>Manage Deals</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
