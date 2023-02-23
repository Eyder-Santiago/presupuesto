import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor() { }

  ingresos: number[] = [];
  nuevoIngreso = 0;

  agregarIngreso() {
    //si el ingreso a ingresar es mayor a 0, añádalo al arreglo de ingresos
    if (this.nuevoIngreso > 0) {
      this.ingresos.push(this.nuevoIngreso);
      this.nuevoIngreso = 0;
    }
  }

  //.reduce() suma total + ingreso
  get totalIngresos() {
    return this.ingresos.reduce((total, ingreso) => total + ingreso, 0);
  }

  ngOnInit(): void {
  }

}


