import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusCircle, Bell, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-content-primary">
      <nav className="bg-surface/80 backdrop-blur-sm border-b border-surface-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-game from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent">
              ProjectHub
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className={`flex items-center gap-2 ${isActive('/') ? 'text-neon-purple' : 'text-content-secondary hover:text-neon-purple'}`}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link
                to="/explore"
                className={`flex items-center gap-2 ${isActive('/explore') ? 'text-neon-blue' : 'text-content-secondary hover:text-neon-blue'}`}
              >
                <Search size={20} />
                <span>Explore</span>
              </Link>
              <Link
                to="/create"
                className={`flex items-center gap-2 ${isActive('/create') ? 'text-neon-pink' : 'text-content-secondary hover:text-neon-pink'}`}
              >
                <PlusCircle size={20} />
                <span>Create</span>
              </Link>
              <motion.button whileHover={{ scale: 1.1 }} className="relative">
                <Bell size={20} className="text-content-secondary hover:text-neon-green" />
                <span className="absolute -top-1 -right-1 bg-neon-pink text-content-primary text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </motion.button>
              <div className="flex items-center gap-4 border-l border-surface-light pl-4">
                <Link to="/profile" className="flex items-center gap-2">
                  <motion.img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-surface-light"
                    whileHover={{ scale: 1.1 }}
                  />
                </Link>
                <motion.button whileHover={{ scale: 1.1 }} className="text-content-secondary hover:text-neon-pink">
                  <LogOut size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
