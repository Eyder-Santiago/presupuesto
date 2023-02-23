import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: number[] = [];
  nuevoEgreso = 0;

  agregarEgreso() {
    //si el egreso a ingresar es mayor a 0, ingréselo al arreglo de egresos
    if (this.nuevoEgreso > 0) {
      this.egresos.push(this.nuevoEgreso);
      this.nuevoEgreso = 0;
    }
  }

  get totalEgresos() {
    return this.egresos.reduce((total, egreso) => total + egreso, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
