import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';
import { EgresoService } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  //Para indicarle a un componente que puede recibir un valor desde el componente padre
  @Input() egreso = new Egreso();
  //Para emitir un valor desde el componente hijo ( eliminar.component) que pueda ser escuchado por el componente padre (layout.component)
  @Output() egresoEliminado = new EventEmitter<Egreso>();

  constructor(private servicioEgreso:EgresoService) { }

  ngOnInit(): void {
  }

  eliminar(){
    if(confirm("¿Estás seguro de eliminar este egreso?")){
      this.servicioEgreso.eliminarEgreso(this.egreso).subscribe(resp=>{
      this.egresoEliminado.emit(this.egreso);
      alert("El egreso se ha eliminado satisfactoriamente");
    },
    err=>{
      alert("No se pudo eliminar el egreso " + err.error);
    });
    }

  }

}
