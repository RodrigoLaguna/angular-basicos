import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje ={
    nombre:'',
    poder: 0
  }

  constructor( private dbzService: DbzService ){}

  agregar( ){
    // Validación
    if (this.nuevo.nombre.trim().length === 0) { return; }
    // Llamar a un metodo del servicio
    this.dbzService.agregarPersonaje( this.nuevo );

    // Agregar
    this.nuevo = {
      nombre:'',
      poder: 0
    }
  }

}
