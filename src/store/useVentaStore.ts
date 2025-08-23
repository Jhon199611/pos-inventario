// src/store/useVentaStore.ts
import { create } from 'zustand';
import type { Venta } from '../types/venta';
import * as ventaService from '../services/ventaService';

interface VentaState {
  ventas: Venta[];
  loading: boolean;
  error: string | null;

  // acciones
  fetchVentas: () => Promise<void>;
  addVenta: (venta: Omit<Venta, 'id'>) => Promise<void>;
  updateVenta: (id: number, venta: Partial<Omit<Venta, 'id'>>) => Promise<void>;
  deleteVenta: (id: number) => Promise<void>;
}

export const useVentaStore = create<VentaState>((set, get) => ({
  ventas: [],
  loading: false,
  error: null,

  fetchVentas: async () => {
    set({ loading: true, error: null });
    try {
      const data = await ventaService.getVentas();
      set({ ventas: data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  addVenta: async (venta) => {
    set({ loading: true, error: null });
    try {
      const newVenta = await ventaService.createVenta(venta);
      set({ ventas: [newVenta, ...get().ventas] });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  updateVenta: async (id, venta) => {
    set({ loading: true, error: null });
    try {
      const updated = await ventaService.updateVenta(id, venta);
      set({
        ventas: get().ventas.map((v) => (v.id === id ? updated : v)),
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteVenta: async (id) => {
    set({ loading: true, error: null });
    try {
      await ventaService.deleteVenta(id);
      set({ ventas: get().ventas.filter((v) => v.id !== id) });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
