import { NavLink } from "react-router-dom";
import { routesConfig } from "../routes/routesConfig";
import { useSidebarStore } from "../store/useSidebarStore";
import { ChevronLeft, Menu } from "lucide-react";

export default function Sidebar() {
  const { isCollapsed, toggleCollapse, isMobileOpen, toggleMobile } =
    useSidebarStore();

  return (
    <>
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="lg:hidden p-2 fixed top-4 left-4 z-50 bg-blue-800 text-white rounded-md"
        onClick={toggleMobile}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`absolute lg:static top-0 left-0 h-full bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white shadow-lg border-r border-blue-700/30 transition-all duration-300 z-40
        ${isCollapsed ? "w-20" : "w-64"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          {!isCollapsed && <div className="text-2xl font-bold">Menú</div>}
          <button
            onClick={toggleCollapse}
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
                onClick={() => {
                  if (isMobileOpen) toggleMobile(); // cerrar en móvil al navegar
                }}
              >
                <route.icon size={20} />
                {!isCollapsed && <span>{route.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay en móvil */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={toggleMobile}
        />
      )}
    </>
  );
}
