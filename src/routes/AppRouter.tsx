import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import LoadingPage from "../pages/LoadingPage"; // Importamos la nueva página
import { routesConfig } from "./routesConfig";
import { PrivateRoute } from "./PrivateRoute";

export default function AppRouter() {
  const status = useAuthStore((state) => state.status);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    // Iniciamos el listener de autenticación una sola vez
    initializeAuth();
  }, [initializeAuth]);

  // 1. Mientras el estado sea 'checking', mostramos la pantalla de carga
  if (status === 'checking') {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* 2. Si el usuario está autenticado, mostramos las rutas privadas */}
        {status === 'authenticated' ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            {routesConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<PrivateRoute>{route.element}</PrivateRoute>}
              />
            ))}
            {/* Ruta catch-all para redirigir al dashboard si se entra a una ruta no definida */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        ) : (
          // 3. Si no está autenticado, solo puede acceder al login
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}




