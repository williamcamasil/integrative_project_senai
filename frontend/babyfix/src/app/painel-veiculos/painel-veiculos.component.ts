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

  constructor(private _veiculosService: VeiculosService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._veiculosService.cadastrarVeiculo(this.veiculo).subscribe(
      vaga => {this.veiculo = new Veiculo(0, "", "", 0, 0)},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id: number){
    this._veiculosService.atualizarVeiculo(id,this.veiculo).subscribe(
      vaga => {this.veiculo = new Veiculo(0, "", "", 0, 0)},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this._veiculosService.removerVeiculo(id).subscribe(
      vaga => {this.veiculo = new Veiculo(0, "", "", 0, 0)},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }
}
