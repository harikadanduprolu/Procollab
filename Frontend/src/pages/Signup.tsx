import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const skillsList = ["JavaScript", "React", "HTML", "CSS", "Node.js", "MongoDB", "Express.js"];
const coursesList = ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"];

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    graduationYear: "",
    course: "",
    skills: [] as string[],
    college: "",
    githubLink: "",
    linkedInLink: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Clear error for this field
  };

  const handleSkillChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
    setErrors((prev) => ({ ...prev, skills: "" })); // Clear skill error
  };

  const validate= () => {
    let newErrors: { [key: string]: string } = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.password || formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else if (!/\d/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
        newErrors.password = "Password must include at least one number and one special character";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
      const currentYear = new Date().getFullYear();
      const gradYear = parseInt(formData.graduationYear);
      if (!formData.graduationYear) {
        newErrors.graduationYear = "Graduation Year is required";
      } else if (isNaN(gradYear) || gradYear < currentYear || gradYear > currentYear + 10) {
        newErrors.graduationYear = "Enter a valid graduation year";
      }
      if (!formData.college.trim()) newErrors.college = "College name is required";
      if (!formData.course) newErrors.course = "Course is required";
      if (formData.skills.length === 0) newErrors.skills = "Select at least one skill";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  if(validate() === false) {
  return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/user/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.success) {
        alert("Account created successfully! ✅");
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error: any) {
      alert("Signup failed! 🚨 Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
  
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
  
              <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
              <h3 className="font-semibold text-blue-500">Graduation Details:</h3>
              <input type="text" name="graduationYear" placeholder="Graduation Year" value={formData.graduationYear} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.graduationYear && <p className="text-red-500 text-sm">{errors.graduationYear}</p>}
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
              <input type="text" name="githubLink" placeholder="GitHub Profile Link" value={formData.githubLink} onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <input type="text" name="linkedInLink" placeholder="LinkedIn Profile Link" value={formData.linkedInLink} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            
              <h3 className="font-semibold text-blue-500">Select Your Course:</h3>

              <select name="course" value={formData.course} onChange={handleChange} className="w-full p-3 border rounded-lg text-blue-500">

                <option value="">Select Course</option>
                {coursesList.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
              {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}

              <h3 className="font-semibold text-blue-500">Select Your Skills:</h3>
              {skillsList.map((skill, index) => (
                <label key={index} className="flex items-center text-blue-500">
                  <input type="checkbox" checked={formData.skills.includes(skill)} onChange={() => handleSkillChange(skill)} className="mr-2" />
                  {skill}
                </label>
              ))}
              {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}

              <button type="submit" disabled={loading} className="bg-green-500 text-white py-2 px-4 rounded-lg">
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p className="text-center text-sm text-gray-500">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
