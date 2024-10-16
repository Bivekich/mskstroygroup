import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("jwt");

  if (!token) {
    // If there's no token, redirect to the login page
    return <Navigate to="/SignUp" replace />;
  }

  // If there's a token, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
