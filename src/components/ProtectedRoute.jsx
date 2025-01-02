import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth, roles, userRole }) => {
  if (!isAuth) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(userRole)) {
    // Redirect to a forbidden page or dashboard if the user lacks the required role
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
