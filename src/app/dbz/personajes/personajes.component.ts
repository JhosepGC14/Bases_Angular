import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // @Input('dataPersonajes') dataProps: NewCharacter[] = [];

  get personajes() {
    return this.DbzService.getPersonajes;
  }

  //inyectamos el servicio para poder utilizarlo en la clase
  constructor(private DbzService: DbzService) {}
}
