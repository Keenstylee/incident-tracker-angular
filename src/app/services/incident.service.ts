import { Injectable } from '@angular/core';
import { Incident } from '../models/incident.model';

@Injectable({ providedIn: 'root' })
export class IncidentService {
  private incidentes: Incident[] = [
    { id: 1, codigo: 'INC-001', titulo: 'Formulario sin validación', descripcion: 'Permite guardar sin título', prioridad: 'Alta', modulo: 'Formulario', estado: 'nuevo' },
    { id: 2, codigo: 'INC-002', titulo: 'Ruta detalle 404', descripcion: 'La ruta /detalle/:id no carga', prioridad: 'Alta', modulo: 'Rutas', estado: 'nuevo' },
    { id: 3, codigo: 'INC-003', titulo: 'Dashboard incorrecto', descripcion: 'Estadísticas mal calculadas', prioridad: 'Alta', modulo: 'Dashboard', estado: 'nuevo' }
  ];

  getIncidentes(): Incident[] { return this.incidentes; }
  getIncidenteById(id: number): Incident | undefined {
    return this.incidentes.find(i => i.id === id);
  }
  addIncidente(inc: Incident): void { this.incidentes.push(inc); }
}
