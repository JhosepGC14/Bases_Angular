import { Component, OnInit } from '@angular/core';
import { NewCharacter } from '../interfaces/dbz.interface';

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

  //2 forma de hacer formularios
  personajes: NewCharacter[] = [
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

  nuevo: NewCharacter = {
    nombre: '',
    poder: 0,
  };
}
