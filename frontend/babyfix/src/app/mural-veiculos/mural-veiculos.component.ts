import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Veiculo } from '../models/Veiculos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural-veiculos',
  templateUrl: './mural-veiculos.component.html',
  styleUrls: ['./mural-veiculos.component.css']
})
export class MuralVeiculosComponent implements OnInit {

  public veiculos: Veiculo[] = [];

  constructor(private _veiculosService: VeiculosService, private router: Router) { }

  ngOnInit(): void {
    this.clearSessionStorage();
    this.listarVeiculos();
  }

  listarVeiculos(){
    this._veiculosService.getVeiculos()
      .subscribe(
        retornaVeiculo => {
          sessionStorage.setItem('id_post', retornaVeiculo[retornaVeiculo.length-1].id.toString());
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

  editVehicle(veiculo: Veiculo):void {
    this.clearSessionStorage();
    sessionStorage.setItem('update', JSON.stringify(veiculo));
    this.router.navigate(['/painel/']);
  }

  deleteVehicle(id: number):void {
    this.clearSessionStorage();
    sessionStorage.setItem('id_delete', id.toString());
    this.router.navigate(['/painel/']);
  }

  clearSessionStorage():void {
    sessionStorage.removeItem('update');
    sessionStorage.removeItem('id_delete');
  }
}