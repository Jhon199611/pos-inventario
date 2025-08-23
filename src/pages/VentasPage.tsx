import { useState, useEffect } from 'react';
import type { Venta } from '../types/venta';
import { useVentaStore } from '../store/useVentaStore';
import { VentaTable } from '../components/ventas/VentaTable';
import { VentaForm } from '../components/ventas/VentaForm';

export default function VentasPage() {
  const { fetchVentas } = useVentaStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ventaToEdit, setVentaToEdit] = useState<Venta | undefined>(undefined);

  useEffect(() => {
    fetchVentas();
  }, [fetchVentas]);

  const handleNewVenta = () => {
    setVentaToEdit(undefined);
    setIsModalOpen(true);
  };

  const handleEditVenta = (venta: Venta) => {
    setVentaToEdit(venta);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Ventas</h1>
      
      <div className="mb-4">
        <button
          onClick={handleNewVenta}
          className="px-4 py-2 bg-blue-800 text-white rounded shadow hover:bg-blue-900"
        >
          Nueva Venta
        </button>
      </div>
      
      <VentaTable onEdit={handleEditVenta} />

      <VentaForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ventaToEdit={ventaToEdit}
      />
    </div>
  );
}


