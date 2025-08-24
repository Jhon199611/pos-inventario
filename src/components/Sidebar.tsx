import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { routesConfig } from "../routes/routesConfig";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg border-r border-blue-700/30 transition-all duration-300 z-40
        ${isCollapsed ? "w-20" : "w-64"}
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          {!isCollapsed && <div className="text-2xl font-bold">Menú</div>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded hover:bg-white/20"
          >
            <ChevronLeft
              className={`transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Menú dinámico */}
        <ul className="space-y-4 mt-6">
          {routesConfig.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded cursor-pointer hover:bg-white/20 transition ${
                    isActive ? "bg-white/30 font-bold" : ""
                  }`
                }
                onClick={onClose} // cerrar en móvil al navegar
              >
                <route.icon size={20} />
                {!isCollapsed && <span>{route.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay en móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={onClose}
        />
      )}
    </>
  );
}

