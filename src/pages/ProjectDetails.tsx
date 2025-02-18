// src/pages/ProjectDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold">Project Details - {id}</h1>
    </div>
  );
}

export default ProjectDetails;