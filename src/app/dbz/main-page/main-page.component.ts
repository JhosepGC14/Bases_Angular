import { Component } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  //1 forma de hacer event.preventDefault
  // addCharacter = (e: any) => {
  //   console.log('evento :  ', event);
  //   e.preventDefault();
  //   console.log('Heeey!!');
  // };


  nuevo: NewCharacter = {
    nombre: '',
    poder: 0,
  };


  //constructor de la clase MainPageComponent donde se define la propiedad de
  //DBZ services
  //asi es como se injecta un servicio en el componente
  constructor() {}
}
