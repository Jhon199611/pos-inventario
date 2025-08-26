import { Menu, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore'; // Asegúrate que la ruta sea correcta

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  // 1. Obtenemos la función logout del store
  const logout = useAuthStore((state) => state.logout);

  // 2. Creamos el manejador del evento para el clic
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="h-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-md flex items-center justify-between px-6 text-white font-semibold">
      {/* Botón hamburguesa */}
      <button
        className="p-2 rounded-md hover:bg-blue-800 transition"
        onClick={onToggleSidebar}
      >
        <Menu size={28} />
      </button>

      <div className="text-xl font-bold">Mi Dashboard</div>

      {/* 3. Agrupamos los botones y añadimos el de "Cerrar Sesión" */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-blue-800 px-4 py-1 rounded-lg shadow hover:bg-blue-100 transition">
          Perfil
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-transparent border border-white/50 text-white/90 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
          title="Cerrar sesión"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Salir</span>
        </button>
      </div>
    </nav>
  );
}

















