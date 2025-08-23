// src/services/ventaService.ts
import { supabase } from '../lib/supabase';
import type { Venta } from '../types/venta';

// Traer todas las ventas
export const getVentas = async (): Promise<Venta[]> => {
  const { data, error } = await supabase
    .from('ventas')
    .select('*')
    .order('fecha', { ascending: false });

  if (error) throw error;
  return data as Venta[];
};

// Crear una venta nueva
export const createVenta = async (venta: Omit<Venta, 'id'>): Promise<Venta> => {
  const { data, error } = await supabase
    .from('ventas')
    .insert([venta])
    .select()
    .single();

  if (error) throw error;
  return data as Venta;
};

// Actualizar una venta existente
export const updateVenta = async (id: number, venta: Partial<Omit<Venta, 'id'>>): Promise<Venta> => {
  const { data, error } = await supabase
    .from('ventas')
    .update(venta)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Venta;
};

// Eliminar una venta
export const deleteVenta = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from('ventas')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

