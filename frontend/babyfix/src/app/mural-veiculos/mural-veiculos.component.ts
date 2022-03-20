import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Veiculo } from '../models/Veiculos.model';

@Component({
  selector: 'app-mural-veiculos',
  templateUrl: './mural-veiculos.component.html',
  styleUrls: ['./mural-veiculos.component.css']
})
export class MuralVeiculosComponent implements OnInit {

  public veiculos: Veiculo[] = [];

  constructor(private _veiculosService: VeiculosService) { }

  ngOnInit(): void {
    this.listarVeiculos();
  }

  listarVeiculos(){
    this._veiculosService.getVeiculos()
      .subscribe(
        retornaVeiculo => {
          console.log('Veiculos: ', retornaVeiculo)
          this.veiculos = retornaVeiculo.map(
            item=>{
              return new Veiculo(
                item.id,
                item.marca,
                item.modelo,
                item.ano,
                item.km
              );
            }
          )
        }
      )
  }
}