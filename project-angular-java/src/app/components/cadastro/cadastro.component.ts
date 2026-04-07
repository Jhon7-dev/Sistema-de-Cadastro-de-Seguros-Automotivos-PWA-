import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // 1. Importação necessária
import { Seguro } from '../../models/Seguro';
import { MarcaCarro } from '../../models/MarcaCarro';
import { MarcaCarroService } from '../../service/marca-carro.service';
import { SeguroService } from '../../service/seguro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html', 
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  public seguro: Seguro = new Seguro();
  public marcasCarro$!: Observable<MarcaCarro[]>;

  constructor(
    private marcaCarroService: MarcaCarroService,
    private seguroService: SeguroService,
    private router: Router // 2. Injetar o Router aqui
  ) {}

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  // Use apenas UM método no seu botão do HTML (ex: (click)="salvar()")
  salvar(): void {
    console.log('Enviando dados:', this.seguro);
    
    this.seguroService.cadastrar(this.seguro).subscribe({
      next: (res: any) => {
        console.log('Sucesso!', res);
        alert('Seguro cadastrado com sucesso!');
        
        this.seguro = new Seguro(); // Limpa os campos
        
        // 3. Redireciona para a lista automaticamente
        // Assim o componente de listagem será carregado de novo e buscará os dados novos
        this.router.navigate(['/listar']); 
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar seguro:', err);
        alert('Erro ao salvar. Verifique se o servidor está rodando.');
      }
    });
  }

  enviarNotificacao(): void {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Sistema de Seguros', {
            body: 'Cadastro realizado e sincronizado!',
            icon: 'assets/icons/icon-96x96.png'
          });
        }
      });
    }
  }
}