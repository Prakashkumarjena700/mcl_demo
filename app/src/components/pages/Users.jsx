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
        // Artificial delay for testing skeleton loader effect
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchUsers();
  }, []);

  const renderSkeletonRows = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <tr key={index} className="animate-pulse">
        {Array.from({ length: 7 }).map((_, i) => (
          <td key={i} className="p-3">
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full"></div>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="space-y-6 w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">User List</h1>
      <div className="rounded-lg shadow overflow-x-auto">
        <table className="min-w-full bg-white text-sm text-left border border-gray-200">
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white uppercase">
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
              users.map((user) => (
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
                    <div className="truncate max-w-[150px]" title={user.department}>
                      {user.department}
                    </div>
                  </td>
                  <td className="p-3 border">
                    <div className="truncate max-w-[140px]" title={user.phoneNumber}>
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
                    <div className="truncate max-w-[180px]" title={new Date(user.createdAt).toLocaleDateString()}>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 border text-center text-gray-500" colSpan="7">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
