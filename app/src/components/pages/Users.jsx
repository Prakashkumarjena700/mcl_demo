import React, { useEffect, useState } from "react";
import axios from "axios";
import encryptionModule from "../common/LocalStorageUtils";

const Users = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = encryptionModule.becryptData("token");
        const response = await axios.get(`${apiUrl}/users/get-users`, {
          headers: {
            Authorization: token,
          },
        });

        if (response?.data) {
          setUsers(response.data?.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const renderSkeletonRows = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <tr key={index} className="animate-pulse">
        {Array.from({ length: 8 }).map((_, i) => (
          <td key={i} className="p-3 border">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="p-4 overflow-auto w-full">
      <h1 className="text-2xl font-bold mb-4 fixed">User List</h1>
      <table className=" p-5 max-w-[90%] min-w-full mt-16 overflow-auto text-sm text-left border border-gray-200">
        <thead className="text-white bg-gray-700  uppercase">
          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Phone</th>
            <th className="p-3 border">EIS No</th>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Created At</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            renderSkeletonRows()
          ) : users?.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="p-3 border">
                  <div className="truncate max-w-[150px]" title={user.name}>
                    {user.name}
                  </div>
                </td>
                <td className="p-3 border">
                  <div className="truncate max-w-[200px]" title={user.email}>
                    {user.email}
                  </div>
                </td>
                <td className="p-3 border">
                  <div
                    className="truncate max-w-[150px]"
                    title={user.department}
                  >
                    {user.department}
                  </div>
                </td>
                <td className="p-3 border">
                  <div
                    className="truncate max-w-[140px]"
                    title={user.phoneNumber}
                  >
                    {user.phoneNumber}
                  </div>
                </td>
                <td className="p-3 border">
                  <div className="truncate max-w-[120px]" title={user.EISNo}>
                    {user.EISNo}
                  </div>
                </td>
                <td className="p-3 border">
                  <div className="truncate max-w-[150px]" title={user.state}>
                    {user.state}
                  </div>
                </td>
                <td className="p-3 border">
                  <div
                    className="truncate max-w-[180px]"
                    title={new Date(user.createdAt).toLocaleString()}
                  >
                    {new Date(user.createdAt).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-3 border text-center" colSpan="8">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
