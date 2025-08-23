import { useState, useEffect } from 'react';
import { useVentaStore } from '../../store/useVentaStore';
import type { Venta, EstadoVenta } from '../../types/venta';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ventaToEdit?: Venta;
}

export const VentaForm = ({ isOpen, onClose, ventaToEdit }: Props) => {
  const { addVenta, updateVenta } = useVentaStore();

  const [usuario, setUsuario] = useState('');
  const [productomsj, setProductomsj] = useState('');
  const [cantidad, setCantidad] = useState<number>(0);
  const [preciounitario, setPrecioUnitario] = useState<number>(0);
  const [fecha, setFecha] = useState('');
  const [comprador, setComprador] = useState('');
  const [estado, setEstado] = useState<EstadoVenta>('POR PAGAR');

  // si estamos editando, llenar el formulario con los datos existentes
  useEffect(() => {
    if (ventaToEdit) {
      setUsuario(ventaToEdit.usuario);
      setProductomsj(ventaToEdit.productomsj);
      setCantidad(Number(ventaToEdit.cantidad));
      setPrecioUnitario(Number(ventaToEdit.preciounitario));
      setFecha(ventaToEdit.fecha);
      setComprador(ventaToEdit.comprador);
      setEstado(ventaToEdit.estado);
    } else {
      // limpiar formulario si es nueva venta
      setUsuario('');
      setProductomsj('');
      setCantidad(0);
      setPrecioUnitario(0);
      setFecha('');
      setComprador('');
      setEstado('POR PAGAR');
    }
  }, [ventaToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newVenta = {
      usuario,
      productomsj,
      cantidad,
      preciounitario,
      fecha,
      comprador,
      estado,
    };

    try {
      if (ventaToEdit) {
        await updateVenta(ventaToEdit.id, newVenta);
      } else {
        await addVenta(newVenta);
      }
      onClose();
    } catch (err) {
      console.error('Error guardando venta:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-lg w-96"
      >
        <h2 className="text-xl mb-4">
          {ventaToEdit ? 'Editar Venta' : 'Nueva Venta'}
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Producto"
          value={productomsj}
          onChange={(e) => setProductomsj(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Precio Unitario"
          value={preciounitario}
          onChange={(e) => setPrecioUnitario(Number(e.target.value))}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Comprador"
          value={comprador}
          onChange={(e) => setComprador(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value as EstadoVenta)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="POR PAGAR">POR PAGAR</option>
          <option value="PAGO PARCIAL">PAGO PARCIAL</option>
          <option value="PAGADA">PAGADA</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
