import { Component, OnInit } from '@angular/core';
import { EgresoService } from 'src/app/services/egreso.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private servicioEgreso:EgresoService, private servicioIngreso:IngresoService) { }

  ngOnInit(): void {
   this.calcularSaldoTotal();
  }

  public saldoTotal: number = 0;
  public saldoIngreso: number = 0;
  public saldoEgreso: number = 0;

  //porcentaje del egreso comparado con el ingreso
  public porcentaje: number = 0;

  //porcentaje de ingreso disponible sobre los egresos
  public ingresoPorcentajeDisponible: number = 0;
  
  calcularSaldoTotal() {
    let saldoIngreso = 0;
    this.servicioIngreso.getIngresos().subscribe(resp => {
      for (let i = 0; i < resp.length; i++) {
        saldoIngreso += resp[i].valor;
        this.saldoTotal = saldoIngreso;
      }
    });
  
    let saldoEgreso = 0;
    this.servicioEgreso.getEgresos().subscribe(resp => {
      for (let i = 0; i < resp.length; i++) {
        saldoEgreso += resp[i].valor;
      }
      this.saldoTotal -= saldoEgreso;
      this.saldoIngreso = saldoIngreso;
      this.saldoEgreso = saldoEgreso;
      this.porcentaje = (this.saldoEgreso / this.saldoIngreso); // División de saldoEgreso entre saldoIngreso
      this.ingresoPorcentajeDisponible = this.saldoTotal / this.saldoIngreso;
    });
  }
  

    // //porcentaje del egreso comparado con el ingreso
    // getPorcentajeTotal(){
    //   return this.getEgresoTotal()/this.getIngresoTotal();
    // }



}
