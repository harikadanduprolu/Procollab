import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import Explore from "./pages/Explore";
import CreateProject from "./pages/CreateProject";
import ProjectDetails from "./pages/ProjectDetails";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/create"
            element={isAuthenticated ? <CreateProject /> : <Login />}
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Login />}
          />
          <Route
            path="/notifications"
            element={isAuthenticated ? <Notifications /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
