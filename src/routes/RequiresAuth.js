import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequiresAuth = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
