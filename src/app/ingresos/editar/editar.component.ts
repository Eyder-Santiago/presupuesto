import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  mostrarFormulario : boolean = false; //muestra u oculta el form

  //Emitimos los nuevos valores del objeto desde la clase hija para ser escuchada por la clase padre
  @Output() ingresoEditado = new EventEmitter<Ingreso>();

  //traemos los objetos egreso desde la base de datos
  @Input() ingreso = new Ingreso();

  constructor(private servicioIngreso:IngresoService) { }

  ngOnInit(): void {
  }

  modificarIngreso(){
    this.mostrarFormulario = true;
  }

  cerrarFormulario(){
    this.mostrarFormulario = false;
  }

  notificarActualizacion(){
    this.cerrarFormulario();
    this.ingresoEditado.emit(this.ingreso);
  }

  editarIngreso() : void{
    if(this.ingreso.descripcion === null || this.ingreso.valor === 0){
      alert("Algún campo está vacío");
    }else{
      this.servicioIngreso.editarIngreso(this.ingreso).subscribe(resp=>{
        this.ingresoEditado.emit(this.ingreso);
        alert("El ingreso se modificó con éxito");
        this.cerrarFormulario();
      },
      err=>{
        alert("No se pudo editar el ingreso: "+ err);
      }
      );
    }
  }

}
