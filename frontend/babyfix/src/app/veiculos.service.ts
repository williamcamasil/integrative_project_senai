import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './models/Veiculos.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private url = "http://localhost:8080/api";

  constructor(private _httpClient: HttpClient) {  }

  getVeiculos(): Observable<Veiculo[]>{
    return this._httpClient.get<Veiculo[]>(this.url + "/veiculos");
  }

  cadastrarVeiculo(veiculo: Veiculo):Observable<Veiculo[]>{
    return this._httpClient.post<Veiculo[]>(this.url + "/cadastrar",veiculo);
  }

  atualizarVeiculo(id:any ,veiculo: Veiculo):Observable<Veiculo[]>{
    const urlAtualizar = `${this.url + "/editar"}/${id}`;
    return this._httpClient.put<Veiculo[]>(urlAtualizar,veiculo);
  }

  removerVeiculo(id:any):Observable<Veiculo[]>{
    const urlDeletar = `${this.url}/veiculos/${id}`;
    return this._httpClient.delete<Veiculo[]>(urlDeletar);
  }
}
