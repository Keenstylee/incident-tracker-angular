export interface Incident {
  id: number;
  codigo: string;
  titulo: string;
  descripcion: string;
  prioridad: 'Baja' | 'Media' | 'Alta' | 'Crítica';
  modulo: string;
  estado: 'nuevo' | 'en proceso' | 'resuelto' | 'cerrado';
}
