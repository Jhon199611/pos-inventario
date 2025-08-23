import type { Venta } from '../../types/venta';
import { useVentaStore } from '../../store/useVentaStore';

interface Props {
  onEdit: (venta: Venta) => void;
}

export const VentaTable = ({ onEdit }: Props) => {
  const { ventas, deleteVenta } = useVentaStore();

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded shadow-lg">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Usuario</th>
            <th className="p-2 text-left">Producto</th>
            <th className="p-2 text-left">Cantidad</th>
            <th className="p-2 text-left">Precio Unitario</th>
            <th className="p-2 text-left">Fecha</th>
            <th className="p-2 text-left">Comprador</th>
            <th className="p-2 text-left">Estado</th>
            <th className="p-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v) => (
            <tr key={v.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{v.id}</td>
              <td className="p-2">{v.usuario}</td>
              <td className="p-2">{v.productomsj}</td>
              <td className="p-2">{v.cantidad}</td>
              <td className="p-2">{v.preciounitario}</td>
              <td className="p-2">{v.fecha}</td>
              <td className="p-2">{v.comprador}</td>
              <td className="p-2">{v.estado}</td>
              <td className="p-2 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(v)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteVenta(v.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

