import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiLogOut, FiGrid } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const UserDropdown = () => {
  const { user, logOut } = useAuth();
  const { data: userData = {} } = useUserData();

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-[999]">
      {/* Dropdown Button - User Avatar or Loading */}
      <MenuButton className="focus:outline-none cursor-pointer p-2 rounded-full bg-gradient-to-r from-rose-600 via-slate-600 to-teal-500 flex items-center justify-center shadow-[0_0_5px_3px] shadow-tmt-prim hover:shadow-slate-800/50 transition duration-300 ease-in-out">
        <FaUser className="w-5 h-5  text-white" />
      </MenuButton>

      {/* Dropdown Menu Items */}
      <MenuItems className="absolute -right-5 mt-2 w-56 bg-white px-4 py-3 mr-5 rounded-md shadow-2xl border border-gray-200">
        {/* User Info Section */}
        <div className="border-b border-gray-300 pb-3">
          <p className="font-semibold text-gray-800">
            {user?.displayName || "Guest User"}
          </p>
          <p className="text-sm text-gray-500">
            {user?.email || "No email available"}
          </p>
        </div>

        {/* Menu Items */}
        {user &&
          userData &&
          userData.role === "admin" &&
          userData.status === "active" && (
            <MenuItem
              as="button"
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <FiGrid className="text-lg text-gray-500" /> Dashboard
            </MenuItem>
          )}

        {/* Logout Button */}
        <MenuItem
          as="button"
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-red-500 hover:bg-red-100"
        >
          <FiLogOut className="text-lg" /> Log Out
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default UserDropdown;
