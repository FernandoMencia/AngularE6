import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacion: string = 'sumar';

  calcular() {
    switch (this.operacion) {
      case 'sumar':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'restar':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicar':
        this.resultado = this.numero1 * this.numero2;
        break;
      default:
        this.resultado = 0;
    }
  }
}
