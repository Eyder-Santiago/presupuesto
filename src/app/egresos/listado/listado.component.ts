import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //Output emite desde clase hija para ser escuchada por la clase padre
  @Output() egresoEditado = new EventEmitter<Egreso>();
  @Output() egresoEliminado = new EventEmitter<Egreso>();
  @Input() egresos:Egreso[]=[]; //esta informarción es la cargada que obtendremos de layout

  constructor() { }

  ngOnInit(): void {
  }

  onEgresoEditado(egreso:Egreso){
    this.egresoEditado.emit(egreso);
  }

  onEgresoEliminado(egreso:Egreso){
    this.egresoEliminado.emit(egreso);
  }

}
