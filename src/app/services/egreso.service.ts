import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Egreso } from '../modelo/egreso';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  //Arreglo donde se guardarán los egresos
  public egresos:Array<Egreso>=[];


  //Para crear los servicios de egreso

  constructor(
    private http : HttpClient
  ) { }

  public agregarEgreso(egreso:Egreso){
    //agregamos el egreso que viene al arreglo de egresos
    this.egresos.push(egreso);
  }

  
}
