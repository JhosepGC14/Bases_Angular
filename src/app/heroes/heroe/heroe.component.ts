import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.html'],
})
export class HeroeComponent {
  public nombre: string = 'Iron Man ';
  public edad: number = 33;

  public get nombreCapitalize(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spider-Man';
  }
  cambiarEdad(): void {
    this.edad = 15;
  }
}
