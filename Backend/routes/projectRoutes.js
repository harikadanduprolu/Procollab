const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// ✅ Add a new project
router.post("/add", async (req, res) => {
  try {
    const { 
      title, type, description, teamLeader, demoVideo, physicalEquipmentRequired, 
      overview, teammateRequirements, teammateSkills, researchCases, summary, techRequirements 
    } = req.body;

    // Validate project type
    if (!["hardware", "software"].includes(type)) {
      return res.status(400).json({ success: false, message: "Invalid project type" });
    }

    // Validate team leader
    if (!teamLeader || !teamLeader.name) {
      return res.status(400).json({ success: false, message: "Team leader name is required" });
    }

    // Create project object
    const newProject = new Project({
      title,
      type,
      description,
      teamLeader, // Includes both name & optional profileLink
      ...(type === "hardware" && { demoVideo, physicalEquipmentRequired, overview, teammateRequirements, teammateSkills, researchCases }),
      ...(type === "software" && { summary, techRequirements })
    });

    await newProject.save();
    res.status(201).json({ success: true, message: "Project added successfully!", project: newProject });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

// ✅ Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, projects });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

// ✅ Get a specific project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

// ✅ Delete a project by ID
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
