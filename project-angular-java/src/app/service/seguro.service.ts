import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Verifique se este import está correto
import { Seguro } from '../models/Seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
 private readonly API = 'http://localhost:9000/api/seguros';

  constructor(private http: HttpClient) { }

  // É CRUCIAL ter o "return" e a tipagem ": Observable<Seguro>"
  cadastrar(seguro: Seguro): Observable<Seguro> {
    return this.http.post<Seguro>(this.API, seguro);
  }
  listar(): Observable<Seguro[]> {
  return this.http.get<Seguro[]>(this.API);
}
}