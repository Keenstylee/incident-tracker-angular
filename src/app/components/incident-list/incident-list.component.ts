import { Component } from '@angular/core';
import { IncidentService } from '../../services/incident.service';

@Component({
  standalone: false,
  selector: 'app-incident-list',
  template: `
    <h2>Listado de incidentes</h2>
    <ul>
      <li *ngFor="let i of service.getIncidentes()">
        {{ i.codigo }} - {{ i.titulo }} ({{ i.prioridad }})
      </li>
    </ul>
  `
})
export class IncidentListComponent {
  constructor(public service: IncidentService) {}
}
