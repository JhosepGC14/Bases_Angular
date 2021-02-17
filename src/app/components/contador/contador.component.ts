import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="container_counter">
      <button class="btn_aumentar" (click)="acumulador(base)">
        + {{ base }}
      </button>
      <span>{{ numero }}</span>
      <button class="btn_disminuir" (click)="acumulador(-base)">
        - {{ base }}
      </button>
      <h3>
        La base es: <strong>{{ base }}</strong>
      </h3>
    </div>
  `,

  styles: [
    `
      .container_counter {
        width: 100%;
        border: 1px solid lightgrey;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
      }

      .btn_aumentar {
        margin-right: 10px;
      }
      .btn_disminuir {
        margin-left: 10px;
      }
    `,
  ],
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public description: string = 'Primera aplicación con Angular 11';
  public numero: number = 10;
  public base: number = 7;
  public btnDisabled: boolean = false;

  // sumar = () => {
  //   this.numero += 1;
  // };

  // restar = () => {
  //   this.numero -= 1;
  // };

  acumulador = (valor: number): void => {
    if (this.numero > 0) {
      this.numero += valor;
      console.log('se suma o resta');
    } else {
      this.btnDisabled = true;
      console.log('return');
      return;
    }
  };
}
