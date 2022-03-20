import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralVeiculosComponent } from '../mural-veiculos/mural-veiculos.component';
import { PainelVeiculosComponent } from '../painel-veiculos/painel-veiculos.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVeiculosComponent},
  {path: 'painel', component: PainelVeiculosComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }