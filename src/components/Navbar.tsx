import { Menu } from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <nav className="h-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-md flex items-center justify-between px-6 text-white font-semibold">
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition"
        onClick={onToggleSidebar}
      >
        <Menu size={24} />
      </button>

      <div className="text-xl">Mi Dashboard</div>
      <div>
        <button className="bg-white text-blue-800 px-4 py-1 rounded-lg shadow hover:bg-blue-100 transition">
          Perfil
        </button>
      </div>
    </nav>
  );
}
