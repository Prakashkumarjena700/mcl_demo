import React from "react";
import encryptionModule from "../common/LocalStorageUtils";

const IDCard = () => {
  const user = encryptionModule.becryptData("user");

  return (
    <div className="max-h-[90vh] ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">ID Card</h2>
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded p-6 border">
        {/* Left Side - Profile */}
        <div className="flex flex-col items-center w-full md:w-1/2 border-r md:pr-6">
          <img
            src="https://media.istockphoto.com/id/1208175274/vector/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-material-concept-vector.jpg?s=612x612&w=0&k=20&c=t4aK_TKnYaGQcPAC5Zyh46qqAtuoPcb-mjtQax3_9Xc="
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 mb-4"
          />
          <div className="text-center space-y-1">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600">
              Department: <span className="font-medium">{user.department}</span>
            </p>
            <p className="text-sm text-gray-600">
              Designation:{" "}
              <span className="font-medium">{user.designation}</span>
            </p>
            <p className="text-sm text-gray-600">
              EIS No: <span className="font-medium">{user.EISNo}</span>
            </p>
            <p className="text-sm text-gray-600">
              Blood Group:{" "}
              <span className="font-medium">{user.bloodGroup}</span>
            </p>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              <span className="font-medium">Phone:</span> {user.phoneNumber}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">WhatsApp:</span> {user.whatsAppNo}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Aadhar No:</span> {user.aadharNo}
            </p>
          </div>
          <div className="border-t pt-4 text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">State:</span> {user.state}
            </p>
            <p>
              <span className="font-medium">District:</span> {user.district}
            </p>
            <p>
              <span className="font-medium">Village:</span> {user.village}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
