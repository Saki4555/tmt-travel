import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiLogOut } from "react-icons/fi"; 
import { FaUser, FaUserShield, FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const DashboardUserDropDown = () => {
    const { logOut } = useAuth();
    const { data: user = {} } = useUserData();


    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate("/");
            })
            .catch();
    };

    // Status color mapping
    const statusColors = {
        active: "text-green-500",
        inactive: "text-gray-400",
        banned: "text-red-500",
        pending: "text-yellow-500",
    };

    return (
        <Menu as="div" className="relative inline-block text-left z-[999]">
            {/* Dropdown Button - User Avatar */}
            <MenuButton className="focus:outline-none cursor-pointer p-2 rounded-full bg-gradient-to-r from-rose-600 via-slate-600 to-teal-500 flex items-center justify-center shadow-[0_0_5px_3px] shadow-tmt-prim hover:shadow-slate-800/50 transition duration-300 ease-in-out">
                <FaUser className="w-5 h-5 text-white" />
            </MenuButton>

            {/* Dropdown Menu Items */}
            <MenuItems className="absolute right-0 mt-4 w-64 bg-white px-4 py-3 mr-5 rounded-lg shadow-2xl border border-gray-200">
                {/* User Info Section */}
                <div className="border-b border-gray-300 pb-3 flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <FaUserShield className="text-tmt-prim text-lg" />
                        <p className="font-semibold text-gray-800">{user.name || "User Name"}</p>
                    </div>
                    <p className="text-sm text-gray-500 pl-7">{user.email || "user@example.com"}</p>

                    {/* Role */}
                    <div className="flex items-center gap-2 mt-2 pl-7">
                        <FaUserShield className="text-blue-500 text-sm" />
                        <span className="text-sm text-gray-600 font-medium">Role:</span>
                        <span className="text-sm text-gray-700">{user.role || "N/A"}</span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 mt-1 pl-7">
                        <FaCircle className={`${statusColors[user.status] || "text-gray-400"} text-xs`} />
                        <span className="text-sm text-gray-600 font-medium">Status:</span>
                        <span className={`text-sm ${statusColors[user.status] || "text-gray-500"} font-medium capitalize`}>
                            {user.status || "N/A"}
                        </span>
                    </div>
                </div>

                {/* Logout Button */}
                <MenuItem as="button" onClick={handleLogout} className="w-full text-left px-4 py-2 mt-2 flex items-center gap-3 rounded-md text-red-500 hover:bg-red-100 transition-all">
                    <FiLogOut className="text-lg" /> Log Out
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};

export default DashboardUserDropDown;
