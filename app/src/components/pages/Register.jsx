import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const departments = ["HR", "IT", "Finance", "Marketing", "Operations"];
const states = [
  "Andhra Pradesh",
  "Bihar",
  "Delhi",
  "Maharashtra",
  "Tamil Nadu",
];

const Register = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    EISNo: "",
    dob: "",
    department: "",
    designation: "",
    phoneNumber: "",
    bloodGroup: "",
    placeOfPosting: "",
    aadharNo: "",
    project: "",
    dateOfJoining: "",
    qualification: "",
    state: "",
    district: "",
    block: "",
    village: "",
    pin: "",
    landmark: "",
    whatsAppNo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.EISNo) newErrors.EISNo = "EIS No is required";
    if (!formData.department) newErrors.department = "Department is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const response = await axios.post(`${apiUrl}/users/register`, formData);

        if (response?.data) {
          toast.success("User has been register successfully");
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            EISNo: "",
            dob: "",
            department: "",
            designation: "",
            phoneNumber: "",
            bloodGroup: "",
            placeOfPosting: "",
            aadharNo: "",
            project: "",
            dateOfJoining: "",
            qualification: "",
            state: "",
            district: "",
            block: "",
            village: "",
            pin: "",
            landmark: "",
            whatsAppNo: "",
          });
        } else {
          toast.error("Something went wrong");
        }
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Form Section */}
      <div className="w-full lg:w-[70%] flex justify-center items-center flex-col py-10 px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Create an account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs absolute -bottom-5 right-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs absolute -bottom-5 right-2 ">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Phone"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <input
              type="tel"
              name="whatsAppNo"
              value={formData.whatsAppNo}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="WhatsApp No"
            />
          </div>

          {/* EIS No */}
          <div className="relative">
            <input
              type="text"
              name="EISNo"
              value={formData.EISNo}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="EIS No"
            />
            {errors.EISNo && (
              <p className="text-red-500 text-xs absolute -bottom-5 right-2 ">
                {errors.EISNo}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Aadhar No"
            />
          </div>

          <div>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Blood Group"
            />
          </div>

          {/* Department */}
          <div className="relative">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm text-gray-500"
            >
              <option value="">Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500 text-xs absolute -bottom-5 right-2">
                {errors.department}
              </p>
            )}
          </div>

          {/* Designation */}
          <div>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Designation"
            />
          </div>

          {/* State */}
          <div>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm text-gray-500"
            >
              <option value="">State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="District"
            />
          </div>

          <div>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Village"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Password"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs absolute -bottom-5 right-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-full transition-all duration-300 font-semibold ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-900"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
                    />
                  </svg>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Side Image + Login Section */}
      <div className="w-full lg:w-[30%] min-h-[300px] lg:min-h-screen bg-[url('/auth-bg.jpg')] bg-cover bg-center flex justify-center items-center flex-col text-white px-4 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Have an account?
        </h2>
        <p className="text-sm sm:text-base text-center mt-2">Login now and continue</p>
        <a
          className="px-10 sm:px-12 bg-white text-black py-2 rounded-full mt-6 font-semibold hover:bg-gray-200 transition-all duration-600"
          href="/"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
