import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Button as MuiButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export function ProjectDetails() {
  const { id } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showLoginPopup, setShowLoginPopup] = useState(false); // Show/hide login modal

  // Handle Join Project Button Click
  const handleJoinProject = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      // Redirect to join page if logged in
      window.location.href = "/join-project";
    }
  };

  // Close Login Popup
  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 animate-fade-in">
      {/* Project Header */}
      <div className="text-center space-y-4">
        <Typography
          variant="h3"
          className="font-extrabold text-neon-blue leading-tight animate-slide-in"
        >
          Innovative Project Title
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-content-secondary mt-2"
        >
          By John Doe | Research & Development
        </Typography>
      </div>

      {/* Project Image */}
      <div className="overflow-hidden rounded-3xl shadow-neon transition-all hover:scale-105 duration-300">
        <img
          src="https://source.unsplash.com/1200x600/?technology,innovation"
          alt="Project Preview"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Project Details */}
      <Paper
        elevation={3}
        className="bg-surface-darkest shadow-lg p-8 rounded-2xl"
      >
        <Typography variant="h4" className="font-semibold text-content-primary">
          Project Overview
        </Typography>
        <Typography
          variant="body1"
          className="mt-5 text-content-secondary leading-relaxed"
        >
          This project redefines user interaction with AI-driven systems by
          creating a seamless and intelligent platform that leverages machine
          learning, automation, and advanced UI/UX principles to enhance user
          engagement.
        </Typography>
      </Paper>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <MuiButton
          variant="contained"
          size="large"
          className="bg-neon-blue hover:bg-neon-purple text-white shadow-intense transform hover:scale-105 transition-all duration-300"
          onClick={handleJoinProject}
        >
          Join Project
        </MuiButton>
      </div>

      {/* Login/Signup Popup */}
      <Dialog open={showLoginPopup} onClose={handleClosePopup}>
        <DialogTitle className="text-neon-blue font-bold">Join Project</DialogTitle>
        <DialogContent>
          <Typography variant="body1" className="text-content-secondary">
            You need to log in or sign up to join this project.
          </Typography>
        </DialogContent>
        <DialogActions className="space-x-4 px-6 pb-4">
          <Button
            onClick={() => (window.location.href = "/login")}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
          <Button
            onClick={() => (window.location.href = "/signup")}
            color="secondary"
            variant="outlined"
          >
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProjectDetails;
