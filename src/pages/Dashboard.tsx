
export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Usuarios</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Ventas</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">$12,300</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700">Pedidos</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">350</p>
        </div>
      </div>

      {/* Lista rápida */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Últimas Actividades</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">Juan creó una cuenta</li>
          <li className="py-2">María realizó una compra</li>
          <li className="py-2">Carlos actualizó su perfil</li>
        </ul>
      </div>
    </div>
  );
}