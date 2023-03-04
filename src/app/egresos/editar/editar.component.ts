import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';
import { EgresoService } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  mostrarFormulario : boolean = false; //muestra u oculta el form

  //Emitimos los nuevos valores del objetos desde la clase hija para ser escuchada por la clase padre
  @Output() egresoEditado = new EventEmitter<Egreso>();

  //traemos los objetos egreso desde la base de datos
  @Input() egreso = new Egreso();

  constructor(private servicioEgreso:EgresoService) { }

  ngOnInit(): void {
  }

  modificarEgreso(){
    this.mostrarFormulario = true;
  }

  cerrarFormulario(){
    this.mostrarFormulario = false;
  }

  //
  notificarActualizacion(){
    this.cerrarFormulario();
    this.egresoEditado.emit(this.egreso);
  }

    //emitimos el objeto egreso que vamos a editar
    editarEgreso() : void{
      if(this.egreso.descripcion === null || this.egreso.valor === 0){
        alert("Algún campo está vacío");
      }else{
        this.servicioEgreso.editarEgreso(this.egreso).subscribe(resp =>{
          this.egresoEditado.emit(this.egreso);
          alert("El egreso se modificó con éxito");
          this.cerrarFormulario();
        },
        err=>{
          alert("No se pudo editar el egreso: "+ err);
        }
        );
      }
  
    }


  

}
