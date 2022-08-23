import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactElement;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isLogged = !!localStorage.getItem("isLogged");
  if (!isLogged) return <Navigate to="/auth/login" />;
  return children;
}
