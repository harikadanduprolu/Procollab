import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Target, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function HomePage() {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCreateProject = () => {
    if (isAuthenticated) {
      navigate('/create');
    } else {
      setShowModal(true);
    }
  };

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
          <button
            onClick={handleCreateProject}
            className="flex items-center gap-2 px-6 py-3 border-2 border-neon-blue text-neon-blue rounded-lg hover:bg-surface transition-all hover:scale-105 hover:shadow-neon-blue"
          >
            Create Project
            <Rocket size={20} />
          </button>
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
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-surface-dark rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-content-primary mb-2">{feature.title}</h3>
            <p className="text-content-secondary">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Login/Signup Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-surface-light rounded-lg p-6 w-96 shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-content-secondary hover:text-content-primary"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-content-primary mb-4">Login or Sign Up</h3>
            <p className="text-content-secondary mb-6">
              You need to log in or sign up to create a project.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="/login"
                className="bg-neon-blue text-content-primary px-4 py-2 rounded-lg text-center hover:bg-muted-blue transition-all hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border-2 border-neon-purple text-neon-purple px-4 py-2 rounded-lg text-center hover:bg-muted-purple transition-all hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      )}
  

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
        {/* Project Cards with View Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            {
              title: 'AI-Powered Chatbot',
              description: 'An interactive chatbot that helps students learn AI concepts efficiently.',
              link: '/projects/ai-chatbot',
              hoverColor: 'hover:border-neon-purple/50',
            },
            {
              title: 'Collaborative Whiteboard',
              description: 'An online collaborative space to brainstorm and visualize ideas in real-time.',
              link: '/projects/whiteboard',
              hoverColor: 'hover:border-neon-blue/50',
            },
            {
              title: 'IoT-Based Smart Home',
              description: 'A system that automates home appliances with IoT integration.',
              link: '/projects/smart-home',
              hoverColor: 'hover:border-neon-pink/50',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className={`bg-surface/80 rounded-lg p-4 border border-surface-light ${project.hoverColor} transition-all transform hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <h4 className="text-lg font-semibold text-content-primary">{project.title}</h4>
              <p className="text-content-secondary mb-4">{project.description}</p>
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon-blue text-content-primary rounded-lg hover:bg-muted-blue transition-all hover:scale-105"
              >
                View Details
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
