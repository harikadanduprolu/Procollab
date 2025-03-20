import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", formData);
      if (res.data.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A2E]">
      <div className="bg-[#16213E] p-8 rounded-lg shadow-lg w-96 border border-[#0F3460]">
        <h2 className="text-3xl font-bold text-[#16B8F3] mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-[#EAEAEA]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0F3460] text-white border border-[#16B8F3] rounded-lg focus:ring-2 focus:ring-[#16B8F3] focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
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
              className="w-full px-4 py-2 bg-[#0F3460] text-white border border-[#16B8F3] rounded-lg focus:ring-2 focus:ring-[#16B8F3] focus:outline-none"
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
              className="w-full px-4 py-2 bg-[#0F3460] text-white border border-[#16B8F3] rounded-lg focus:ring-2 focus:ring-[#16B8F3] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#16B8F3] text-white py-2 rounded-lg hover:bg-[#5B9BD5] transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-[#EAEAEA]">
          Already have an account?{" "}
          <span
            className="text-[#7F56D9] hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
