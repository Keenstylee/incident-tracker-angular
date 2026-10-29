import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IncidentService } from '../../services/incident.service';

@Component({
  standalone: false,
  selector: 'app-incident-detail',
  template: `
    <h2>Detalle del incidente</h2>
    <div *ngIf="incidente">
      <p>Código: {{ incidente.codigo }}</p>
      <p>Título: {{ incidente.titulo }}</p>
      <p>Prioridad: {{ incidente.prioridad }}</p>
    </div>
  `
})
export class IncidentDetailComponent {
  incidente: any;
  constructor(private route: ActivatedRoute, private service: IncidentService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.incidente = this.service.getIncidenteById(id);
  }
}
