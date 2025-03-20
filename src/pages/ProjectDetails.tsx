import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Paper, Typography, Button as MuiButton, Chip } from "@mui/material";

export function ProjectDetails() {
  const { id } = useParams();
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      
      {/* Project Header */}
      <div className="text-center">
        <Typography variant="h3" className="font-extrabold text-neon-blue">Innovative Project Title</Typography>
        <Typography variant="subtitle1" className="text-content-secondary mt-3">By John Doe | Research & Development</Typography>
      </div>
      
      {/* Project Image */}
      <img
        src="https://source.unsplash.com/1200x600/?technology,innovation"
        alt="Project Preview"
        className="w-full rounded-xl shadow-lg object-cover"
      />
      
      {/* Project Details */}
      <Paper elevation={3} className="bg-card shadow-lg p-8 rounded-lg">
        <Typography variant="h4" className="font-semibold text-content-primary">Project Overview</Typography>
        <Typography variant="body1" className="mt-5 text-content-secondary leading-relaxed">
          This project aims to redefine user interaction with AI-driven systems. Our goal is to create a seamless, intuitive, 
          and intelligent platform that leverages machine learning, automation, and cutting-edge UI/UX design principles 
          to enhance user engagement.
        </Typography>
      </Paper>
      
      {/* Project Insights */}
      <div className="grid md:grid-cols-2 gap-8">
        <Paper elevation={3} className="bg-card shadow-md p-6 rounded-lg">
          <Typography variant="h5" className="font-semibold">Technologies Used</Typography>
          <div className="mt-4 flex flex-wrap gap-3">
            <Chip label="React" />
            <Chip label="TypeScript" />
            <Chip label="Tailwind CSS" />
            <Chip label="Node.js" />
            <Chip label="Machine Learning" />
            <Chip label="Blockchain" />
          </div>
        </Paper>
        
        <Paper elevation={3} className="bg-card shadow-md p-6 rounded-lg">
          <Typography variant="h5" className="font-semibold">Key Features</Typography>
          <ul className="mt-4 space-y-3 text-lg text-content-secondary">
            <li>✅ AI-powered Recommendations</li>
            <li>✅ Interactive User Dashboard</li>
            <li>✅ Real-time Data Analysis</li>
            <li>✅ Blockchain Security Integration</li>
            <li>✅ Customizable Automation Tools</li>
          </ul>
        </Paper>
      </div>
      
      {/* Additional Insights */}
      <div className="grid md:grid-cols-2 gap-8">
        <Paper elevation={3} className="bg-card shadow-md p-6 rounded-lg">
          <Typography variant="h5" className="font-semibold">Challenges Addressed</Typography>
          <Typography variant="body1" className="mt-4 text-lg text-content-secondary">
            This project addresses inefficiencies in AI adoption, tackles security risks, improves system adaptability, 
            and enhances overall user experience in intelligent automation.
          </Typography>
        </Paper>
        
        <Paper elevation={3} className="bg-card shadow-md p-6 rounded-lg">
          <Typography variant="h5" className="font-semibold">Project Goals</Typography>
          <ul className="mt-4 space-y-3 text-lg text-content-secondary">
            <li>🎯 Enhance AI adoption with user-friendly interfaces</li>
            <li>🎯 Strengthen security using blockchain technology</li>
            <li>🎯 Improve automation for businesses & individuals</li>
            <li>🎯 Optimize system performance with ML-based analytics</li>
          </ul>
        </Paper>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-10">
        <MuiButton variant="contained" color="primary" size="large" component={Link} to="/join-project">
          Join Project
        </MuiButton>
      </div>
    </div>
  );
}

export default ProjectDetails;