import { Routes } from '@angular/router';
// Certifique-se de que os nomes das classes (CadastroComponent, ListarComponent)
// são exatamente os mesmos definidos nos arquivos dentro da pasta components.
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListarComponent } from './components/listar/listar-seguros.component';

export const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'listar',
    component: ListarComponent,
  },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full',
  },
];
