import React, { useEffect, useState } from "react";
import encryptionModule from "../common/LocalStorageUtils";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router";
import {
  UsersIcon,
  MenuIcon,
  XIcon,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.png";
import logo_s from "../../assets/Only_Logo.png";

const AdminLayout = ({ children }) => {
  const userLs = encryptionModule.becryptData("user");
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    if (userLs?.role !== "admin") {
      navigate("/");
    }
  }, [userLs]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logout successfully.");
    navigate("/");
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-56"
        } bg-gray-800 text-white p-4 flex flex-col relative`}
      >
        {/* Logo */}
        {!isCollapsed && (
          <img
            src={logo}
            alt="Qlith Logo"
            className=" w-[60%] object-contain mt-2"
          />
        )
        }

        {/* Collapse Button */}
        <button
          onClick={toggleSidebar}
          className={`${
            isCollapsed ? "mb-6 mr-1.5 mt-2" : "relative bottom-10"
          } focus:outline-none self-end`}
        >
          {isCollapsed ? <MenuIcon size={20} /> : <XIcon size={30} />}
        </button>

        {/* Navigation */}
        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            onClick={handleLinkClick}
            className={`flex items-center gap-2 hover:bg-gray-700 p-2 rounded ${
              location.pathname === "/admin/dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <LayoutDashboard size={20} />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>

          <Link
            to="/admin/users"
            onClick={handleLinkClick}
            className={`flex items-center gap-2 hover:bg-gray-700 p-2 rounded ${
              location.pathname === "/admin/users" ? "bg-gray-700" : ""
            }`}
          >
            <UsersIcon size={20} />
            {!isCollapsed && <span>Users</span>}
          </Link>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-2 p-2 rounded absolute bottom-3"
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Log Out</span>}
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 w-full">{children}</div>

      {/* Logout Modal */}
      <Dialog
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6 space-y-4">
            <Dialog.Title className="text-lg font-bold">
              Confirm Logout
            </Dialog.Title>
            <Dialog.Description>
              Are you sure you want to log out? You will be redirected to the
              login page.
            </Dialog.Description>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Logout
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminLayout;
