import { Component } from '@angular/core';
import { IncidentService } from '../../services/incident.service';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>Total incidentes: {{ total }}</p>
    <p>Abiertos: {{ abiertos }}</p>
  `
})
export class DashboardComponent {
  constructor(private service: IncidentService) {}

  // BUG INC-003: cuenta todos en lugar de solo los no cerrados
  get total(): number { return this.service.getIncidentes().length; }
  get abiertos(): number { return this.service.getIncidentes().length; }
}
