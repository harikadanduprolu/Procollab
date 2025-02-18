import React from 'react';
import { Users, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onJoin: (projectId: string) => void;
}

export function ProjectCard({ project, onJoin }: ProjectCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg shadow-lavender/20 p-6 hover:shadow-xl hover:shadow-lavender/30 transition-all border border-lavender">
      <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.requiredSkills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-mint/50 text-primary rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Users size={18} className="text-coral" />
          <span>{project.team.length}/{project.teamSize}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={18} className="text-primary" />
          <span>{new Date(project.deadline).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <BookOpen size={18} className="text-sunshine" />
          <span>{project.branches.join(', ')}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.team.slice(0, 3).map((member) => (
            <img
              key={member.id}
              src={member.avatar}
              alt={member.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          {project.team.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-lavender flex items-center justify-center text-sm text-primary font-medium">
              +{project.team.length - 3}
            </div>
          )}
        </div>
        
        <button
          onClick={() => onJoin(project.id)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all hover:scale-105"
        >
          Join Project
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}