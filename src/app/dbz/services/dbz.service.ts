import { Injectable } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: NewCharacter[] = [
    {
      nombre: 'Goku',
      poder: 50000,
    },
    {
      nombre: 'Vegeta',
      poder: 40000,
    },
    {
      nombre: 'Trunks',
      poder: 30000,
    },
  ];

  get getPersonajes(): NewCharacter[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: NewCharacter) {
    this._personajes.push(personaje);
  }
}
