const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  graduationYear: { type: Number, required: true },
  course: { type: String, enum: ["CSE", "ECE", "EEE","IT"], required: true },
  skills: { type: [String], required: true }, // Array of selected skills
  college: { type: String, required: true }, // College name
  githubLink: { type: String, default: "" }, // Optional GitHub profile link
  linkedInLink: { type: String, default: "" } // Optional LinkedIn profile link
});

module.exports = mongoose.model("User", UserSchema);
