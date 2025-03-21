import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const { name, email, password, confirmPassword } = formData;

  // Handle form input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (isLogin) {
      // Login validation
      if (email === "test@example.com" && password === "password123") {
        alert("Login successful! 🎉");
        navigate("/");
      } else {
        alert("Invalid email or password! 😢");
      }
    } else {
      // Signup validation
      if (password !== confirmPassword) {
        alert("Passwords do not match! ❌");
        return;
      }
      console.log("User Registered:", formData);
      alert("Account created successfully! Please log in. ✅");
      setIsLogin(true);
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
        {/* Left side - Toggle between Login and Signup */}
        <div
          className="w-1/2 bg-cover bg-center relative hidden md:block"
          style={{
            backgroundImage: `url('${
              isLogin ? "/assets/login-bg.jpg" : "/assets/signup-bg.jpg"
            }')`,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-white text-3xl mb-4">
              {isLogin ? "New Here?" : "One of us?"}
            </h2>
            <p className="text-white mb-6">
              {isLogin
                ? "Sign up to discover amazing projects and collaborate!"
                : "If you already have an account, just sign in. We've missed you!"}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="border-2 border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              {isLogin ? "SIGN UP" : "SIGN IN"}
            </button>
          </motion.div>
        </div>

        {/* Right side - Form (Login/Signup) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isLogin ? "Log In" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field for Signup */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your name"
                />
              </motion.div>
            )}

            {/* Email field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold">EMAIL</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email"
              />
            </motion.div>

            {/* Password field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-semibold">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
                placeholder={
                  isLogin ? "Enter your password" : "Create a password"
                }
              />
            </motion.div>

            {/* Confirm Password for Signup */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-semibold">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Confirm your password"
                />
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLogin ? "LOG IN NOW" : "SIGN UP NOW"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
