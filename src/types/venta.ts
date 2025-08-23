// src/types/venta.ts

export type EstadoVenta = 'POR PAGAR' | 'PAGADA' | 'PAGO PARCIAL';

export interface Venta {
  id: number;
  usuario: string;         // usuario que registró la venta
  productomsj: string;     // nombre del producto
  cantidad: number;
  preciounitario: number;
  fecha: string;           // manejamos como string (YYYY-MM-DD)
  comprador: string;       // nombre del cliente
  estado: EstadoVenta;
}
