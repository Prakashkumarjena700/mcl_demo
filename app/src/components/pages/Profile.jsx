import React from "react";
import encryptionModule from "../common/LocalStorageUtils";

const Profile = () => {
  const user = encryptionModule.becryptData("user");

  return (
    <div className="p-6 max-w-5xl mx-auto h-[90vh] overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Employee Profile
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-xl shadow-md border border-blue-100">
        {/* Each field */}
        <ProfileField label="Name" value={user?.name} />
        <ProfileField label="Email" value={user?.email} />
        <ProfileField label="EIS No" value={user?.EISNo} />
        <ProfileField label="Phone Number" value={user?.phoneNumber} />
        <ProfileField label="WhatsApp No" value={user?.whatsAppNo} />
        <ProfileField label="Department" value={user?.department} />
        <ProfileField label="Designation" value={user?.designation} />
        <ProfileField label="State" value={user?.state} />
        <ProfileField label="District" value={user?.district} />
        <ProfileField label="Village" value={user?.village} />
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <p className="text-base text-gray-800 font-semibold">{value || "—"}</p>
  </div>
);

export default Profile;
