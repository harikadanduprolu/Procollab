import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // If authenticated, show the page, otherwise redirect to login
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
