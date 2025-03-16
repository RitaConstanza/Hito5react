import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export { ProtectedRoute };  
