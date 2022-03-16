import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // Componentes,pipes del modulo
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  // Componentes visibles fuera del modulo
  exports:[
    ListadoComponent
  ],
  // modulos
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
