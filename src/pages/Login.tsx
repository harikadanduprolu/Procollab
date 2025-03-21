import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", formData);
      if (res.data.success) {
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <div className="bg-[#16213E] p-8 rounded-lg shadow-lg w-96 border border-[#0F3460]">
        <h2 className="text-3xl font-bold text-[#7F56D9] mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-[#EAEAEA]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0F3460] text-white border border-[#7F56D9] rounded-lg focus:ring-2 focus:ring-[#7F56D9] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold text-[#EAEAEA]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0F3460] text-white border border-[#7F56D9] rounded-lg focus:ring-2 focus:ring-[#7F56D9] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7F56D9] text-white py-2 rounded-lg hover:bg-[#957DAD] transition-all"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-[#EAEAEA]">
          Don't have an account?{" "}
          <span
            className="text-[#16B8F3] hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
