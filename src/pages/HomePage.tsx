import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Target } from 'lucide-react';

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <motion.h1
          className="text-5xl font-bold bg-gradient-game from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Collaborate, Create, Innovate
        </motion.h1>
        <motion.p
          className="text-xl text-content-secondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join a community of students from different branches working together on innovative projects.
          Find your next project or build your dream team.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            to="/explore"
            className="flex items-center gap-2 px-6 py-3 bg-neon-purple text-content-primary rounded-lg hover:bg-muted-purple transition-all hover:scale-105 shadow-neon shadow-neon-purple/50"
          >
            Explore Projects
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/create"
            className="flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue rounded-lg hover:bg-surface transition-all hover:scale-105 hover:shadow-neon-blue"
          >
            Create Project
            <Rocket size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Users className="text-neon-purple" size={24} />,
            title: 'Team Building',
            description: 'Connect with students across different branches and build diverse teams for your projects.',
            hoverColor: 'hover:border-neon-purple/50',
          },
          {
            icon: <Target className="text-neon-blue" size={24} />,
            title: 'Skill Matching',
            description: 'Find projects that match your skills or discover new opportunities to learn and grow.',
            hoverColor: 'hover:border-neon-blue/50',
          },
          {
            icon: <Rocket className="text-neon-pink" size={24} />,
            title: 'Project Management',
            description: 'Efficiently manage your projects with built-in tools for task tracking and team collaboration.',
            hoverColor: 'hover:border-neon-pink/50',
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className={`bg-surface/80 backdrop-blur-sm rounded-lg p-6 border border-surface-light ${feature.hoverColor} transition-colors transform hover:scale-105 hover:shadow-xl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255, 0, 255, 0.2)' }}
          >
            <div className="w-12 h-12 bg-surface-dark rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-content-primary mb-2">{feature.title}</h3>
            <p className="text-content-secondary">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Projects */}
      <section>
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-content-primary">Featured Projects</h2>
          <Link
            to="/explore"
            className="text-neon-blue hover:text-muted-blue flex items-center gap-2 transition-all hover:scale-105"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </motion.div>
        {/* Placeholder for project cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-surface/80 rounded-lg p-4 border border-surface-light hover:border-neon-purple/50 transition-all transform hover:scale-105">
            <h4 className="text-lg font-semibold text-content-primary">AI-Powered Chatbot</h4>
            <p className="text-content-secondary">An interactive chatbot that helps students learn AI concepts efficiently.</p>
          </div>
          <div className="bg-surface/80 rounded-lg p-4 border border-surface-light hover:border-neon-blue/50 transition-all transform hover:scale-105">
            <h4 className="text-lg font-semibold text-content-primary">Collaborative Whiteboard</h4>
            <p className="text-content-secondary">An online collaborative space to brainstorm and visualize ideas in real-time.</p>
          </div>
          <div className="bg-surface/80 rounded-lg p-4 border border-surface-light hover:border-neon-pink/50 transition-all transform hover:scale-105">
            <h4 className="text-lg font-semibold text-content-primary">IoT-Based Smart Home</h4>
            <p className="text-content-secondary">A system that automates home appliances with IoT integration.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
