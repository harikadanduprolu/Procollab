// src/pages/CreateProject.tsx
import React from "react";

export function CreateProject() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-neon-purple mb-6">Create a New Project</h1>
        <form className="space-y-6 bg-surface-light p-6 rounded-xl shadow-lg">
          <input type="text" placeholder="Project Title" className="w-full p-3 rounded-lg bg-surface-dark text-content-primary" />
          <textarea placeholder="Project Description" className="w-full p-3 rounded-lg bg-surface-dark text-content-primary"></textarea>
          <button className="w-full bg-neon-blue text-content-primary py-3 rounded-lg hover:bg-muted-blue transition-all">
            Submit Project
          </button>
        </form>
      </div>
    );
  }
  

export default CreateProject;