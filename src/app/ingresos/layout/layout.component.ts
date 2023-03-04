import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  ingresos:Ingreso[]=[];
  constructor(private servicioIngreso:IngresoService) { }

  ngOnInit(): void {
    this.cargarIngresos();
  }
  

  cargarIngresos(){
    this.servicioIngreso.getIngresos().subscribe((res:Ingreso[]) =>{
      this.ingresos = res;
    });
  }

  //envío el objeto a eliminar, la cual la utizará la clase hija eliminar.component.ts, en el html se ve mejor
  onIngresoEliminado(ingreso:Ingreso){
    this.cargarIngresos();
  }

  //envío el objeto a editar, la cual la utilizará la clase hija editar.component.ts, en el html se ve mejor
  onIngresoEditado(ingreso:Ingreso){
    this.cargarIngresos();
  }



}
