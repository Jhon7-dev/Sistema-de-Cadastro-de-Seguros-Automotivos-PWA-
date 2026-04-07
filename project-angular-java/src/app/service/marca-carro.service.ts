import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // 1. Faltava este import
import { map } from 'rxjs/operators';
import { MarcaCarro } from '../models/MarcaCarro';

interface CarResponse {
  Results: Array<any>; // 2. A API da NHTSA usa 'Results', não 'Makes'
}

@Injectable({
  providedIn: 'root',
})
export class MarcaCarroService {
  // 3. Removi o 'getallmakes' para usar um endpoint mais leve ou formatado corretamente
  private API_CARROS = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

  constructor(private http: HttpClient) { }

  private mapMarcas(marcas: any[]): MarcaCarro[] {
    return marcas.map(marca => ({
      // 4. Ajustado para os nomes reais que a API retorna: MakeId e MakeName
      codigo: marca.MakeId, 
      nome: marca.MakeName
    }));
  }

  public getMarcas(): Observable<MarcaCarro[]> {
    // 5. Use 'get' em vez de 'jsonp', já que a API suporta JSON direto
    return this.http.get<CarResponse>(this.API_CARROS).pipe(
      map((res: CarResponse) => this.mapMarcas(res.Results))
    );
  }
}