import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

// 1.- PROPIEDADES
  private _personajes:  Personaje[] = [
    {
      nombre: 'Goku',
      poder: 90000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ];

  // 2.- GETTER AND SETTERS
  get personajes(): Personaje[] {
    // Romper la referencia y envia cada elemento por separado
    return [...this._personajes];
  }

  // 3.- CONSTRUCTOR
  constructor() { }

  // MÉTODOS
  agregarPersonaje( personaje: Personaje ){
    this._personajes.push(personaje);
  }
}
