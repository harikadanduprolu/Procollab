import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth(); // Use login from AuthContext
  const navigate = useNavigate();
  const { email, password } = formData;

  const defaultEmail = "admin";
  const defaultPassword = "admin123";

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (
      (email === "test@example.com" && password === "password123") ||
      (email === defaultEmail && password === defaultPassword)
    ) {
      login(); // Set isAuthenticated to true
      alert("Login successful! 🎉");
      navigate("/"); // Redirect to home page
    } else {
      alert("Invalid email or password! 😢");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <motion.div
        className="bg-white shadow-2xl rounded-lg flex max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left side - Image and Sign Up link */}
        <div
          className="w-1/2 bg-cover bg-center relative hidden md:block"
          style={{ backgroundImage: `url('/assets/login-bg.jpg')` }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-white text-3xl mb-4">New Here?</h2>
            <p className="text-white mb-6">
              Sign up to discover amazing projects and collaborate!
            </p>
            <Link
              to="/signup"
              className="border-2 border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              SIGN UP
            </Link>
          </motion.div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm font-semibold">EMAIL</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email or username"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-semibold">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your password"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LOG IN NOW
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
