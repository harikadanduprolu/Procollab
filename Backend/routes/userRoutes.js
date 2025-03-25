const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ✅ SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, graduationYear, course, skills, college, githubLink, linkedInLink } = req.body;

    // ❗ Validate required fields
    if (!name || !email || !password || !dateOfBirth || !graduationYear || !college) {
      return res.status(400).json({ success: false, message: "Please fill in all required fields." });
    }

    // ❗ Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
      graduationYear,
      course: course || "", // Ensure optional fields don't break
      skills: skills || [],
      college,
      githubLink: githubLink || "",
      linkedInLink: linkedInLink || "",
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup Error: ", err); // Log actual error
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

// ✅ SIGNIN ROUTE
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ❗ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // ❗ Compare plain text password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password); // ✅ FIXED
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // ❗ Generate JWT token
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ success: false, message: "JWT secret is missing in environment variables." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ success: true, token, user });
  } catch (err) {
    console.error("Signin Error: ", err); // Log actual error
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});


module.exports = router;
