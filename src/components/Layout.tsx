import React, { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusCircle, Bell, LogOut, X } from "lucide-react";
import { motion } from "framer-motion";

interface PublicLayoutProps {
  children: ReactNode;
  openAuthModal: (type: "login" | "signup") => void;
}

export function PublicLayout({ children, openAuthModal }: PublicLayoutProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-content-primary">
      <nav className="bg-surface/80 backdrop-blur-sm border-b border-surface-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent">
            ProjectHub
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/explore" className={`flex items-center gap-2 ${isActive("/explore") ? "text-neon-blue" : "text-content-secondary hover:text-neon-blue"}`}>
              <Search size={20} />
              <span>Explore</span>
            </Link>
            <div className="flex gap-4">
              <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 rounded-lg text-content-secondary hover:bg-neon-blue hover:text-white" onClick={() => openAuthModal("login")}>
                Log In
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 rounded-lg text-content-secondary hover:bg-neon-purple hover:text-white" onClick={() => openAuthModal("signup")}>
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}

interface PrivateLayoutProps {
  children: ReactNode;
}

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-content-primary">
      <nav className="bg-surface/80 backdrop-blur-sm border-b border-surface-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent">
            ProjectHub
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className={`flex items-center gap-2 ${isActive("/") ? "text-neon-purple" : "text-content-secondary hover:text-neon-purple"}`}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/explore" className={`flex items-center gap-2 ${isActive("/explore") ? "text-neon-blue" : "text-content-secondary hover:text-neon-blue"}`}>
              <Search size={20} />
              <span>Explore</span>
            </Link>
            <Link to="/create" className={`flex items-center gap-2 ${isActive("/create") ? "text-neon-pink" : "text-content-secondary hover:text-neon-pink"}`}>
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
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
  isAuthenticated: boolean;
}

export function Layout({ children, isAuthenticated }: LayoutProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const openAuthModal = (type: "login" | "signup") => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <>
      {isAuthenticated ? <PrivateLayout>{children}</PrivateLayout> : <PublicLayout children={children} openAuthModal={openAuthModal} />}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-surface-light p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-content-primary">{authType === "login" ? "Log In" : "Sign Up"}</h2>
              <button onClick={closeAuthModal} className="text-content-secondary hover:text-neon-pink">
                <X size={20} />
              </button>
            </div>
            <form>
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-lg" required />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-lg" required />
              {authType === "signup" && <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded-lg" required />}
              <motion.button whileHover={{ scale: 1.05 }} className="w-full bg-neon-blue text-white py-2 rounded-lg">
                {authType === "login" ? "Log In" : "Sign Up"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
