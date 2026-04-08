import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seguro } from '../models/Seguro';
import { OnlineOfflineService } from './online-offline.service';
import { db } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private readonly API = 'http://localhost:9000/api/seguros';

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService 
  ) {
    this.ouvirStatusConexao();
  }

  // Método principal
  public async salvar(seguro: Seguro) {
    if (this.onlineOfflineService.isOnline) {
      this.salvaAPI(seguro);
    } else {
      await this.salvarLocal(seguro);
    }
  }

  private salvaAPI(seguro: Seguro) {
    // IMPORTANTE: Removemos o ID temporário do IndexedDB antes de enviar para a API
    // para que o seu banco oficial (ex: MongoDB/Postgres) gere um ID real.
    const { id, ...seguroSemId } = seguro;

    this.http.post<Seguro>(this.API, seguroSemId).subscribe({
      next: () => alert('Seguro cadastrado com sucesso na API!'),
      error: (err) => {
        console.error('Erro ao enviar para API, salvando localmente...', err);
        this.salvarLocal(seguro);
      }
    });
  }

  private async salvarLocal(seguro: Seguro) {
    try {
      await db.seguros.add(seguro);
      console.log('Seguro salvo no IndexedDB com sucesso');
      alert('Você está offline. O seguro foi salvo no dispositivo!');
    } catch (error) {
      console.error('Erro ao salvar no banco local:', error);
    }
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao.subscribe(online => {
      if (online) {
        console.log('Conexão restabelecida! Iniciando sincronização...');
        this.sincronizarDados();
      }
    });
  }
private async sincronizarDados() {
    const segurosLocais = await db.seguros.toArray();
    
    for (const seguro of segurosLocais) {
      // Captura o ID e garante que ele não é nulo
      const idLocal = seguro.id;

      if (idLocal) {
        // Removemos o ID para enviar para a API
        const { id, ...dadosParaEnvio } = seguro;

        this.http.post(this.API, dadosParaEnvio).subscribe({
          next: async () => {
            console.log(`Sincronizado: ${idLocal}`);
            
            // O 'as any' ou 'as number' força o TS a aceitar o valor
            // Isso resolve o erro de "argument of type undefined"
            await db.seguros.delete(idLocal as any); 
          },
          error: (err) => console.error('Erro ao sincronizar:', err)
        });
      }
    }
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API);
  }
}