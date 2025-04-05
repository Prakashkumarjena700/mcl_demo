import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import encryptionModule from "../common/LocalStorageUtils";
import {
  Menu as MenuIcon,
  X as XIcon,
  User,
  IdCard,
  LogOut,
} from "lucide-react";

const UserLayout = ({ children }) => {
  const user = encryptionModule.becryptData("user");
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    if (user?.role !== "user") navigate("/");
  }, [user]);

  useEffect(() => {
    setIsCollapsed(true);
  }, [location.pathname]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleLogoutConfirm = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const navLinks = [
    {
      label: "Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
    {
      label: "ID Card",
      icon: <IdCard size={20} />,
      path: "/id-card",
    },
  ];

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${
            isCollapsed ? "w-16" : "w-56"
          } bg-gray-800 text-white transition-all duration-300 p-4 flex flex-col relative`}
        >
          <button
            onClick={toggleSidebar}
            className="mb-6 self-end text-white focus:outline-none"
          >
            {isCollapsed ? <MenuIcon size={22} /> : <XIcon size={22} />}
          </button>

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${
                  location.pathname === link.path ? "bg-gray-700" : ""
                }`}
              >
                {link.icon}
                {!isCollapsed && <span>{link.label}</span>}
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-2 p-2 rounded hover:bg-red-600 transition-colors mt-auto"
          >
            {!isCollapsed && <span>Log Out</span>}
            <LogOut size={20} />
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-between gap-4 mt-6">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 w-full"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
                onClick={handleLogoutConfirm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserLayout;
