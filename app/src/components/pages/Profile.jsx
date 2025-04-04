import React from "react";
import encryptionModule from "../common/LocalStorageUtils";

const Profile = () => {
  const user = encryptionModule.becryptData("user");

  return (
    <div className="overflow-auto max-h-[90vh]">
      <div className="overflow-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <p className="text-lg text-gray-800">{user?.name}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <p className="text-lg text-gray-800">{user?.email}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">EIS No</label>
            <p className="text-lg text-gray-800">{user?.EISNo}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <p className="text-lg text-gray-800">{user?.phoneNumber}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">WhatsApp No</label>
            <p className="text-lg text-gray-800">{user?.whatsAppNo}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Department</label>
            <p className="text-lg text-gray-800">{user?.department}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Designation</label>
            <p className="text-lg text-gray-800">{user?.designation}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">State</label>
            <p className="text-lg text-gray-800">{user?.state}</p>
          </div>

          <div>
            <label className="text-gray-700 font-medium">District</label>
            <p className="text-lg text-gray-800">{user?.district}</p>
          </div>
          <div>
            <label className="text-gray-700 font-medium">Village</label>
            <p className="text-lg text-gray-800">{user?.village}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
