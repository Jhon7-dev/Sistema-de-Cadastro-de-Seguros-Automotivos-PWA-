// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponent 
  ],
  template: `
    <app-menu></app-menu> 
    
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css' // Garante que o CSS abaixo seja aplicado
})
export class AppComponent {
  title = 'project-angular-java';
}