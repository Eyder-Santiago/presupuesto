import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  //Output emite desde clase hija para ser escuchada por la clase padre
  @Output() ingresoEditado = new EventEmitter<Ingreso>();
  @Output() ingresoEliminado = new EventEmitter<Ingreso>();
  //@Output() ingresoValorTotal = new EventEmitter<number>(); no se puede pasar en modo output a header por ser de diferentes módulos 
  @Input() ingresos:Ingreso[]=[]; //esta informarción es la cargada que obtendremos de layout

  constructor(private ingresoServicio:IngresoService) { }

  ngOnInit(): void {
    this.getValorIngreso();
  }

  public ingresoTotal:number = 0;

  public getValorIngreso() : void{
    let total:number = 0;
    this.ingresoServicio.getIngresos().subscribe(resp =>{
      for (let i=0; i<resp.length;i++){
        total+=resp[i].valor;
      }
      this.ingresoTotal = total;
      //this.ingresoValorTotal.emit(total)
    });
  }

  onIngresoEditado(ingreso:Ingreso){
    this.ingresoEditado.emit(ingreso);
  }

  onIngresoEliminado(ingreso:Ingreso){
    this.ingresoEliminado.emit(ingreso);
  }

}
