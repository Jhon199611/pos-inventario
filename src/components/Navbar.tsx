export default function Navbar() {
  return (
    <nav className="h-16 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-md flex items-center justify-between px-6 text-white font-semibold">
      <div className="text-xl">Mi Dashboard</div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-blue-800 px-4 py-1 rounded-lg shadow hover:bg-blue-100 transition">
          Perfil
        </button>
      </div>
    </nav>
  );
}