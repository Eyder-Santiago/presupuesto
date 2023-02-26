import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';
import { EgresoService } from 'src/app/services/egreso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  @Output() egresoCreado = new EventEmitter<Egreso>();
  //@Output() egresoEditado = new EventEmitter<Egreso>();

  egreso:Egreso = new Egreso();

  /*egreso:Egreso ={
    id:0,
    descripcion:"",
    valor:0
  };*/

  constructor(public servicioEgreso:EgresoService) { }

  ngOnInit(): void {
  }

  //se define la función crearEgreso que será llamada al dar clic en crearEgreso
  agregarEgreso() : void{
    if(this.egreso.descripcion === null || this.egreso.valor === 0){
      alert("Algún campo está vacío");
    }else{ //emite con output un valor al componente padre layout,edicio
      this.servicioEgreso.crearEgreso(this.egreso).subscribe(resp =>{
        //una vez se envíe el objeto local se define en blanco
        this.egresoCreado.emit(this.egreso); 
        this.egreso = new Egreso(); 
        alert("El egreso se creó satisfactoriamente");
      },
      err=>{
        alert("No se pudo crear el egreso: "+ err)
      }
        );
    }
  }

  // //emitimos el objeto egreso que vamos a editar
  // editarEgreso() : void{
  //   if(this.egreso.descripcion === null || this.egreso.valor === 0){
  //     alert("Algún campo está vacío");
  //   }else{
  //     this.servicioEgreso.editarEgreso(this.egreso).subscribe(resp =>{
  //       this.egresoEditado.emit(this.egreso);
  //       alert("El egreso se modificó con éxito");
  //     },
  //     err=>{
  //       alert("No se pudo editar el egreso: "+ err);
  //     }
  //     );
  //   }

  // }



  





}
