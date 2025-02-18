import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Explore() {
  const projects = [
    { id: 1, title: 'AI-Powered Chatbot', author: 'Alice Doe', image: 'https://source.unsplash.com/400x300/?technology' },
    { id: 2, title: 'Blockchain Voting System', author: 'John Smith', image: 'https://source.unsplash.com/400x300/?blockchain' },
    { id: 3, title: 'Smart Home Automation', author: 'Emily Johnson', image: 'https://source.unsplash.com/400x300/?smart-home' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-neon-blue mb-6">Explore Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-surface-light p-4 rounded-xl shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-content-primary">{project.title}</h2>
            <p className="text-content-secondary">By {project.author}</p>
            <Link
              to={`/project/${project.id}`}
              className="mt-4 inline-block text-neon-pink hover:text-neon-blue font-medium"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Explore;