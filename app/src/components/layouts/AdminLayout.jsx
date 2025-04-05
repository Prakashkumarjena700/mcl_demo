import React, { useEffect, useState } from "react";
import encryptionModule from "../common/LocalStorageUtils";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { UsersIcon, MenuIcon, XIcon, LogOut } from "lucide-react";
import { toast } from "react-toastify";

const AdminLayout = ({ children }) => {
  const userLs = encryptionModule.becryptData("user");
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (userLs?.role !== "admin") {
      navigate("/");
    }
  }, [userLs]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handelLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logout successfully.");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? "min-w-16" : "min-w-56"
        } bg-gray-800 text-white transition-all duration-300 p-4 flex flex-col`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-6 focus:outline-none self-end"
        >
          {isCollapsed ? <MenuIcon size={20} /> : <XIcon size={20} />}
        </button>

        <nav className="space-y-4">
          <div>
            <Link
              to="/admin/users"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
            >
              <UsersIcon size={20} />
              {!isCollapsed && <span>Users</span>}
            </Link>
          </div>

          {/* Add more navigation items here */}
          <button
            onClick={handelLogout}
            className="flex items-center gap-2 p-2 rounded absolute bottom-3 "
          >
            {!isCollapsed && <span>Log Out</span>}
            <LogOut size={20} />
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
