import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentFormComponent } from './components/incident-form/incident-form.component';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { IncidentDetailComponent } from './components/incident-detail/incident-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: IncidentListComponent },
  { path: 'formulario', component: IncidentFormComponent },
  // BUG INC-002: falta la ruta 'detalle/:id'
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
