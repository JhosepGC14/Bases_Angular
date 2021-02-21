import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // aqui van los componentes que va a leer el modulo
  declarations: [ListadoComponent, HeroeComponent],
  //aqui van los componentes que se van a exportar y van a ser visibles en los demas modulos
  exports: [ListadoComponent, HeroeComponent],
  //aqui solo se importan modulos
  imports: [CommonModule],
})
export class HeroesModule {}
