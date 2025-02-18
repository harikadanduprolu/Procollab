// src/pages/ProjectDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";

export function ProjectDetails() {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-neon-blue">Project Title</h1>
        <p className="text-content-secondary my-4">By John Doe</p>
        <img src="https://source.unsplash.com/800x400/?project" alt="Project" className="w-full rounded-lg" />
        <p className="mt-6 text-content-primary">This is a detailed project description...</p>
        <button className="mt-4 px-6 py-3 bg-neon-purple text-content-primary rounded-lg hover:bg-muted-purple transition-all">
          Join Project
        </button>
      </div>
    );
  }
  

export default ProjectDetails;