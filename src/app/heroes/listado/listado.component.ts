import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heores: string[] = ['Spider Man', 'Hawkeye', 'Hulk', 'Thor', 'Iron man'];

  heroeBorrado: string = '';

  deleteHeroe() {
    this.heroeBorrado = this.heores.shift() || '';
  }
}
