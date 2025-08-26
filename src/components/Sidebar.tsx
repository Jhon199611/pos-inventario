import { NavLink } from "react-router-dom";
import { routesConfig } from "../routes/routesConfig";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Lógica simplificada: siempre 'fixed', se esconde con 'transform' */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-700/30">
          <span className="text-2xl font-bold">Menú</span>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded lg:hidden">
            <X size={24} />
          </button>
        </div>

        <ul className="space-y-2 mt-4 p-2">
          {routesConfig.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md hover:bg-white/20 transition ${
                    isActive ? "bg-white/30 font-bold" : ""
                  }`
                }
                onClick={onClose}
              >
                <route.icon size={20} />
                <span>{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay móvil: solo aparece si el sidebar está abierto en pantallas pequeñas */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />
    </>
  );
}




















