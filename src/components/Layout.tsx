import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-gray-100"> {/* Ya no es un contenedor flex */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Este div ahora usa 'padding' para hacer espacio al sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "lg:pl-64" : "lg:pl-0"}
        `}
      >
        <Navbar onToggleSidebar={toggleSidebar} />
        <main className="p-6 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}






















