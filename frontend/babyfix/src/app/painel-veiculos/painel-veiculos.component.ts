import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/Veiculos.model';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-painel-veiculos',
  templateUrl: './painel-veiculos.component.html',
  styleUrls: ['./painel-veiculos.component.css']
})
export class PainelVeiculosComponent implements OnInit {

  public veiculo: Veiculo = new Veiculo(0, "", "", 0, 0);
  public veiculos: Veiculo[] = [];
  private update: Veiculo;
  private id: string;

  constructor(private _veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.update = JSON.parse(sessionStorage.getItem('update'));
    this.id = sessionStorage.getItem('id_delete');

    if (this.id !== "") {
      this.veiculo = {
        id: parseInt(this.id),
        marca: "",
        modelo: "",
        ano: 0,
        km: 0
      }
    }

    if (this.update) {
      this.veiculo = {
        id: this.update.id,
        marca: this.update.marca,
        modelo: this.update.modelo,
        ano: this.update.ano,
        km: this.update.km
      }
    }

    if (!this.update && !this.id) {
      this.id = sessionStorage.getItem('id_post');
      
      if (this.id === "0") {
        this.id = "1"
      }

      this.veiculo = {
        id: parseInt(this.id) +1,
        marca: "",
        modelo: "",
        ano: 0,
        km: 0
      }
    }
  }

  cadastrar(){
    this._veiculosService.cadastrarVeiculo(this.veiculo).subscribe(
      vaga => {
        this.veiculo = new Veiculo(0, "", "", 0, 0);
        alert("Veiculo cadastrado com sucesso!");
      },
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id: number){
    this._veiculosService.atualizarVeiculo(id,this.veiculo).subscribe(
      vaga => {
        this.veiculo = new Veiculo(0, "", "", 0, 0);
        alert("Veiculo atualizado com sucesso!");
      },
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this._veiculosService.removerVeiculo(id).subscribe(
      vaga => {
        this.veiculo = new Veiculo(0, "", "", 0, 0)
        alert("Veiculo deletado com sucesso!");
      },
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";
  }
}
