import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { routesConfig } from "./routesConfig";
import LoginPage from "../pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

export default function AppRouter() {
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
          {routesConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PrivateRoute>
                  {route.element}
                </PrivateRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




