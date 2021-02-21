import { Component, Input } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input() personajes: NewCharacter[] = [];

  @Input() nuevo: NewCharacter = {
    nombre: '',
    poder: 0,
  };

  addCharacter = () => {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    console.log(this.personajes);
  };
}
