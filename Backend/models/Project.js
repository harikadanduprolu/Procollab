const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["hardware", "software"], required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

  // Team Leader Information
  teamLeader: { 
    name: { type: String, required: true }, 
    profileLink: { type: String } // Optional profile link
  },

  // Fields for hardware projects
  demoVideo: { type: String }, 
  physicalEquipmentRequired: { type: String },
  overview: { type: String },
  teammateRequirements: { type: String }, // Describe the required teammates
  teammateSkills: { type: [String] }, // Array of skills needed
  researchCases: { type: String }, 

  // Fields for software projects
  summary: { type: String },
  techRequirements: { type: [String] } // Array of required technologies
});

module.exports = mongoose.model("Project", ProjectSchema);
