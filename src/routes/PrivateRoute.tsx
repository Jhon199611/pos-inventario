import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const status = useAuthStore((state) => state.status);

  // Si está autenticado, permite el acceso. Si no, Navigate lo manejará en el AppRouter.
  if (status === 'authenticated') {
    return <>{children}</>;
  }

  // Teóricamente, el AppRouter ya previene llegar aquí, pero es una buena salvaguarda.
  return <Navigate to="/login" replace />;
};

