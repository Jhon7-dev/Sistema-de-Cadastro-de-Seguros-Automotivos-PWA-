import Dexie, { Table } from 'dexie';
import { Seguro } from '../models/Seguro';

export class AppDatabase extends Dexie {
  // Define a tabela 'seguros'
  seguros!: Table<Seguro, number>;

  constructor() {
    super('SegurosDB');
    this.version(1).stores({
      // O 'id' é a chave primária. Você pode indexar outros campos se precisar buscar por eles.
      seguros: '++id, nomeSegurado, marcaCarro' 
    });
  }
}

export const db = new AppDatabase();