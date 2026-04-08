import { MarcaCarro } from "./MarcaCarro";

export class Seguro {
    // Corrigido: id precisa de ":" e é bom ser string para o Firebase ou number para o Dexie
    id?: string; 
    marcaCarro?: MarcaCarro;
    modeloCarro?: string;
    placaCarro?: string;
    nomeProprietario?: string;
    sobrenomeProprietario?: string;
    // Dica: use string se for enviar direto para o input tipo "date" do HTML
    dataNascimentoProprietario?: string; 
}