import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import encryptionModule from "../common/LocalStorageUtils";
import { Link } from "react-router";
import { UsersIcon, MenuIcon, XIcon, User, IdCard, LogOut } from "lucide-react";

const UserLayout = ({ children }) => {
  const userLs = encryptionModule.becryptData("user");
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(userLs);

  useEffect(() => {
    if (userLs?.role !== "user") {
      navigate("/");
    }
  }, [userLs]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handelLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? "min-w-16" : "min-w-56 w-56"
        } bg-gray-800 text-white transition-all duration-300 p-4 flex flex-col `}
      >
        <button
          onClick={toggleSidebar}
          className="mb-6 focus:outline-none self-end"
        >
          {isCollapsed ? <MenuIcon size={20} /> : <XIcon size={20} />}
        </button>

        <nav className="space-y-4 ">
          <div>
            <Link
              to="/profile"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
            >
              <User size={20} />
              {!isCollapsed && <span>Profile</span>}
            </Link>
            <Link
              to="/id-card"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
            >
              <IdCard size={20} />
              {!isCollapsed && <span>ID Card</span>}
            </Link>
          </div>
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
      <div className="flex-1 bg-gray-100 p-6">{children}</div>
    </div>
  );
};

export default UserLayout;
