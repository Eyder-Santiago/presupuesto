import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';
import { EgresoService } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //Output emite desde clase hija para ser escuchada por la clase padre
  @Output() egresoEditado = new EventEmitter<Egreso>();
  @Output() egresoEliminado = new EventEmitter<Egreso>();
  //@Output() egresoValorTotal = new EventEmitter<number>(); no se puede pasar a header en modo output por ser diferentes módulos
  @Input() egresos:Egreso[]=[]; //esta informarción es la cargada que obtendremos de layout

  constructor(private servicioEgreso:EgresoService) { }

  ngOnInit(): void {
    //this.calcularTotalEgreso();
    this.getValorEgresos();
  }

  public egresoTotal:number = 0;

  public getValorEgresos(){
    let total:number = 0;
    this.servicioEgreso.getEgresos().subscribe(resp =>{
      for (let i = 0; i < resp.length; i++) {
        total += resp[i].valor;
      }
      //this.egresoValorTotal.emit(total);
      this.egresoTotal = total;
    });
  }



  onEgresoEditado(egreso:Egreso){
    this.egresoEditado.emit(egreso);
  }

  onEgresoEliminado(egreso:Egreso){
    this.egresoEliminado.emit(egreso);
  }

}
