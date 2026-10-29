import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Lista</a> |
      <a routerLink="/formulario">Formulario</a> |
      <a routerLink="/dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
