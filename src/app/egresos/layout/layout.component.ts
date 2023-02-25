import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';
import { EgresoService } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  egresos:Egreso[] =[]; 
  constructor(private servicioEgreso:EgresoService) { }

  ngOnInit(): void {
    this.cargarEgresos(); //obtiene los objetos desde la base de datos, cuyo proceso se efectúa en egreso.service
  }

  cargarEgresos(){
    this.servicioEgreso.getEgresos().subscribe((res: Egreso[]) =>{
      this.egresos = res;
    });
  }

  //envío el objeto a eliminar, la cual la utizará la clase hija eliminar.component.ts, en el html se ve mejor
  onEgresoEliminado(egreso:Egreso){
    this.cargarEgresos();
  }

  //envío el objeto a editar, la cual la utilizará la clase hija editar.component.ts, en el html se ve mejor
  onEgresoEditado(egreso:Egreso){
    this.cargarEgresos();
  }



  


}
