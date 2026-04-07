import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroService } from '../../service/seguro.service';
import { Seguro } from '../../models/Seguro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  // Trocamos templateUrl por template (com crases ``)
  template: `
    <div class="ui card lista-seguros" style="margin: 20px; padding: 20px;">
      <div class="content">
        <h2 class="header">Lista de Seguros</h2>
      </div>

      <div class="content">
        <ng-container *ngIf="seguros$ | async as seguros; else carregando">
          
          <div *ngFor="let seguro of seguros" class="claim-row" style="padding: 10px; border-bottom: 1px solid #ddd;">
            <div>
              <strong>Veículo:</strong> {{ seguro.marcaCarro?.nome }} - {{ seguro.modeloCarro }}
            </div>
            <div>
              <strong>Placa:</strong> {{ seguro.placaCarro }}
            </div>
            <div>
              <strong>Proprietário:</strong> {{ seguro.nomeProprietario }} {{ seguro.sobrenomeProprietario }}
            </div>
          </div>

          <div *ngIf="seguros.length === 0" class="ui warning message">
            Nenhum seguro cadastrado no sistema.
          </div>

        </ng-container>

        <ng-template #carregando>
          <p>Buscando dados no servidor...</p>
        </ng-template>
      </div>
    </div>
  `
})
export class ListarComponent implements OnInit {
  public seguros$!: Observable<Seguro[]>;

  constructor(private seguroService: SeguroService) {}

  ngOnInit(): void {
    this.seguros$ = this.seguroService.listar();
  }
}