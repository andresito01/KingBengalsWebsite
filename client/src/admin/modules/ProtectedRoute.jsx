import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserAdmin } from "../context/AdminContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const { isAdmin } = UserAdmin();

  if (!user) {
    return <Navigate to="/" />;
  } else if (!isAdmin) {
    return <Navigate to="/checkCredentials" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
