import React from "react";
import encryptionModule from "../common/LocalStorageUtils";
import logo from "../../assets/Only_Logo.png";

const IDCard = () => {
  const user = encryptionModule.becryptData("user");

  return (
    <div className="w-full h-screen overflow-x-scroll py-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Employee ID Card
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Shared card style */}
        {[
          {
            side: "front",
            content: (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-t-xl p-4 flex items-center justify-between text-black">
                  <img
                    src={logo}
                    alt="Qlith Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <div className="text-right text-sm">
                    <p className="font-bold">Qlith Innovation Pvt Ltd</p>
                    <p>www.qlith.com</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col items-center text-center flex-grow justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1208175274/vector/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-material-concept-vector.jpg?s=612x612&w=0&k=20&c=t4aK_TKnYaGQcPAC5Zyh46qqAtuoPcb-mjtQax3_9Xc="
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 mb-4"
                  />
                  <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Designation:</span> {user.designation}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Department:</span> {user.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">EIS No:</span> {user.EISNo}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Blood Group:</span> {user.bloodGroup}
                  </p>
                </div>
              </>
            ),
          },
          {
            side: "back",
            content: (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-t-xl p-4 text-black text-center">
                  <p className="font-bold">Employee Information</p>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">Phone:</span> {user.phoneNumber}
                    </p>
                    <p>
                      <span className="font-semibold">WhatsApp:</span> {user.whatsAppNo}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <p>
                      <span className="font-semibold">Aadhar No:</span> {user.aadharNo}
                    </p>
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-1 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">State:</span> {user.state}
                    </p>
                    <p>
                      <span className="font-semibold">District:</span> {user.district}
                    </p>
                    <p>
                      <span className="font-semibold">Village:</span> {user.village}
                    </p>
                  </div>

                  <div className="mt-6 text-xs text-gray-500 border-t pt-2 text-center">
                    <p>This card is property of Qlith Innovation Pvt Ltd.</p>
                    <p>If found, please return to HR Department.</p>
                  </div>
                </div>
              </>
            ),
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-[320px] sm:w-[340px] md:w-[380px] h-[500px] bg-white shadow-xl rounded-xl border-2 border-blue-400 flex flex-col"
          >
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDCard;
