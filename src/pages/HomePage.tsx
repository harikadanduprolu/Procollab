import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, Target } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <h1 className="text-5xl font-bold bg-gradient-game from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent">
          Collaborate, Create, Innovate
        </h1>
        <p className="text-xl text-content-secondary max-w-2xl mx-auto">
          Join a community of students from different branches working together on innovative projects.
          Find your next project or build your dream team.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 px-6 py-3 bg-neon-purple text-content-primary rounded-lg hover:bg-muted-purple transition-all hover:scale-105 shadow-neon shadow-neon-purple/50"
          >
            Explore Projects
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/create"
            className="flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue rounded-lg hover:bg-surface transition-all"
          >
            Create Project
            <Rocket size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-6 border border-surface-light hover:border-neon-purple/50 transition-colors">
          <div className="w-12 h-12 bg-surface-dark rounded-lg flex items-center justify-center mb-4">
            <Users className="text-neon-purple" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-content-primary mb-2">Team Building</h3>
          <p className="text-content-secondary">
            Connect with students across different branches and build diverse teams for your projects.
          </p>
        </div>
        <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-6 border border-surface-light hover:border-neon-blue/50 transition-colors">
          <div className="w-12 h-12 bg-surface-dark rounded-lg flex items-center justify-center mb-4">
            <Target className="text-neon-blue" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-content-primary mb-2">Skill Matching</h3>
          <p className="text-content-secondary">
            Find projects that match your skills or discover new opportunities to learn and grow.
          </p>
        </div>
        <div className="bg-surface/80 backdrop-blur-sm rounded-lg p-6 border border-surface-light hover:border-neon-pink/50 transition-colors">
          <div className="w-12 h-12 bg-surface-dark rounded-lg flex items-center justify-center mb-4">
            <Rocket className="text-neon-pink" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-content-primary mb-2">Project Management</h3>
          <p className="text-content-secondary">
            Efficiently manage your projects with built-in tools for task tracking and team collaboration.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-content-primary">Featured Projects</h2>
          <Link
            to="/explore"
            className="text-neon-blue hover:text-muted-blue flex items-center gap-2"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
        {/* Project cards will go here */}
      </section>
    </div>
  );
}