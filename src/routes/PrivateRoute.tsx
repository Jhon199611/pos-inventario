import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const user = useAuthStore((state) => state.user);

  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>; // envuelto en fragmento
};

