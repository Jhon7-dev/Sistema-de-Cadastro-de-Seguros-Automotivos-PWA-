import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {
  private statusConexao$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.atualizarStatus());
    window.addEventListener('offline', () => this.atualizarStatus());
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConexao() {
    return this.statusConexao$.asObservable();
  }

  private atualizarStatus() {
    this.statusConexao$.next(this.isOnline);
  }
}