import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="custom-navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <i class="shield alternate icon"></i>
          <span>Seguros Java</span>
        </div>

        <div class="nav-links">
          <a class="nav-item" routerLink="/cadastro" routerLinkActive="active-link">
            <i class="plus icon"></i> Novo Cadastro
          </a>
          <a class="nav-item" routerLink="/listar" routerLinkActive="active-link">
            <i class="list icon"></i> Listagem
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .custom-navbar {
      background-color: #1b1c1d; /* Cinza escuro profissional do Semantic UI */
      padding: 0.8rem 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .nav-brand {
      color: #fff;
      font-size: 1.4rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .nav-brand i {
      color: #2185d0; /* Azul destaque */
    }

    .nav-links {
      display: flex;
      gap: 20px;
    }

    .nav-item {
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 1rem;
      padding: 8px 12px;
      border-radius: 4px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .nav-item:hover {
      color: #fff;
      background: rgba(255,255,255,0.1);
    }

    /* Estilo para o link ativo (onde o usuário está) */
    .active-link {
      color: #fff !important;
      background: rgba(33, 133, 208, 0.2) !important;
      border-bottom: 3px solid #2185d0;
      border-radius: 4px 4px 0 0;
    }

    /* Responsividade para celular */
    @media (max-width: 600px) {
      .nav-container {
        flex-direction: column;
        gap: 15px;
      }
      .nav-links {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class MenuComponent { }