import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //dato de entrada - comunicacion entre compoennte padre a hijo
  @Input() nuevo: NewCharacter = {
    nombre: '',
    poder: 0,
  };

  //injectamos el servicio
  constructor(private DbzService: DbzService) {}

  //dato de salida - comunicacion hijo a padre
  // @Output() onNewCharacter: EventEmitter<NewCharacter> = new EventEmitter();

  addCharacter = () => {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //output
    // this.onNewCharacter.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  };
}
