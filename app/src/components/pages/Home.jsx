import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import encryptionModule from "../common/LocalStorageUtils";
import { toast } from "react-toastify";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter mail and password");
    }

    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });
      const user = response?.data?.user;
      const token = response?.data?.token;
      if (user) {
        encryptionModule.encryptData("token", token);
        encryptionModule.encryptData("user", user);
        toast.success("Login successful");
      }

      if (user?.role == "admin") {
        navigate("/admin/users");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message || "Something went wrong";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Login Form Section */}
      <div className="w-full lg:w-[70%] p-6 sm:p-10 flex justify-center items-center flex-col">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 mt-20 lg:mt-0">
          Login to Your Account
        </h2>
        <form
          onSubmit={handleLogin}
          className="space-y-4 w-full max-w-md sm:px-0 px-4"
        >
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none text-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
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
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="justify-center flex lg:hidden">
            New Here?
            <Link to="/register" className="text-blue-900 ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Sidebar / Banner Section */}
      <div className="w-full lg:w-[30%] hidden lg:flex justify-center items-center flex-col bg-[url('/auth-bg.jpg')] bg-cover bg-center text-white">
        <h2 className="text-3xl font-bold mb-2 text-center">New Here?</h2>
        <p className="text-center px-6">
          Register now and discover something new
        </p>
        <a
          href="/register"
          className="px-10 bg-white text-black py-2 rounded-full mt-6 font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
