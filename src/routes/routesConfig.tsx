import { Home, Settings, CircleDollarSign } from "lucide-react";
import Dashboard from "../pages/Dashboard";
import SettingsPage from "../pages/SettingsPage";
import VentasPage from "../pages/VentasPage";

export const routesConfig = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Home,
    element: <Dashboard />,
    
  },
  {
    path: "/ventas",
    name: "Gestion de ventas",
    icon: CircleDollarSign,
    element: <VentasPage />,
    
  },
  {
    path: "/setting",
    name: "Configuración",
    icon: Settings,
    element: <SettingsPage />,
  },
];
