import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  //Output emite desde clase hija para ser escuchada por la clase padre
  @Output() ingresoEditado = new EventEmitter<Ingreso>();
  @Output() ingresoEliminado = new EventEmitter<Ingreso>();
  @Input() ingresos:Ingreso[]=[]; //esta informarción es la cargada que obtendremos de layout

  constructor() { }

  ngOnInit(): void {
  }

  onIngresoEditado(ingreso:Ingreso){
    this.ingresoEditado.emit(ingreso);
  }

  onIngresoEliminado(ingreso:Ingreso){
    this.ingresoEliminado.emit(ingreso);
  }

}
