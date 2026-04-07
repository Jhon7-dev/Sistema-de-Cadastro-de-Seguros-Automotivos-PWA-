import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Importando o nome correto

bootstrapApplication(AppComponent, appConfig) // Iniciando com AppComponent
  .catch((err) => console.error(err));