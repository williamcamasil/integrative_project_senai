export class Veiculo {
    id: number = 0;
    marca: string = "";
    modelo: string = "";
    ano: number = 0;
    km: number = 0;
    
    constructor(id:number, marca:string, modelo: string, ano: number, km: number){
        this.id = id;
        this.marca= marca;
        this.modelo = modelo;
        this.ano = ano;
        this.km = km;
    }
}