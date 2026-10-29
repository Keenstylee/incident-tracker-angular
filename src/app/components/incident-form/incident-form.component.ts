import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';

@Component({
  standalone: false,
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html'
})
export class IncidentFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: IncidentService) {
    // BUG INC-001: falta Validators.required y minLength
    this.form = this.fb.group({
      titulo: [''],
      descripcion: [''],
      prioridad: ['']
    });
  }

  guardar(): void {
    const nuevo = {
      id: Date.now(),
      codigo: 'INC-' + Math.floor(Math.random() * 1000),
      ...this.form.value,
      modulo: 'Formulario',
      estado: 'nuevo' as const
    };
    this.service.addIncidente(nuevo);
    this.form.reset();
  }
}
