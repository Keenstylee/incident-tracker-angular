import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './components/incident-form/incident-form.component';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { IncidentDetailComponent } from './components/incident-detail/incident-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentFormComponent,
    IncidentListComponent,
    IncidentDetailComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
