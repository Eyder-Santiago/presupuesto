import { Injectable, Input } from '@angular/core';
import { Ingreso } from '../modelo/ingreso';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Input() ingresos:Ingreso[]=[];

  constructor() { }


  public ingresoTotal() :number{
    

      return 0;
  }



}
