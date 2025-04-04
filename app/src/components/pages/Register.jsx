import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation
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
          alert("User has been register successfully, Please login");
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      } catch (err) {
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-[70%] flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold text-center mb-6">
          Create an account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 w-full px-14"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
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

          {/* WhatsApp Number */}
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
          <div>
            <input
              type="text"
              name="EISNo"
              value={formData.EISNo}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="EIS No"
            />
            {errors.EISNo && (
              <p className="text-red-500 text-sm">{errors.EISNo}</p>
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

          {/* Department (Dropdown) */}
          <div>
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
              <p className="text-red-500 text-sm">{errors.department}</p>
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

          {/* State (Dropdown) */}
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
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-full outline-none h-8 text-sm"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-800 transition-all duration-600 font-semibold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-[30%] min-h-screen bg-[url('/auth-bg.jpg')] bg-cover bg-center flex justify-center items-center flex-col text-white">
        <h2 className="text-4xl font-bold">Have an account ?</h2>
        <p>Login now and continue</p>
        <a
          className="px-12 bg-white text-black py-2 rounded-full mt-8 font-semibold hover:bg-gray-200 transition-all duration-600"
          href="/"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
