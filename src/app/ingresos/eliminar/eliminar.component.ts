import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  //Para indicarle a un componente que puede recibir un valor desde el componente padre
  @Input() ingreso = new Ingreso();
  //Para emitir un valor desde el componente hijo ( eliminar.component) que pueda ser escuchado por el componente padre (layout.component)
  @Output() ingresoEliminado = new EventEmitter<Ingreso>();
  
  constructor(private servicioIngreso:IngresoService) { }

  ngOnInit(): void {
  }

  eliminar(){
    if(confirm("¿Estás seguro de eliminar este ingreso?")){
      this.servicioIngreso.eliminarIngreso(this.ingreso).subscribe(resp=>{
      this.ingresoEliminado.emit(this.ingreso);
      alert("El ingreso se ha eliminado satisfactoriamente");
    },
    err=>{
      alert("No se pudo eliminar el ingreso " + err.error);
    });
    }
  }



}
