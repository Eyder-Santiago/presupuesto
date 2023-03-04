import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/modelo/ingreso';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  //Emitimos los nuevos valores del objetos desde la clase hija para ser escuchada por la clase padre
  @Output() ingresoCreado = new EventEmitter<Ingreso>();

  ingreso:Ingreso = new Ingreso();

  constructor(public servicioIngreso:IngresoService) { }

  ngOnInit(): void {
  }

  //se define la función crearIngreso que será llamada al dar clic en crearIngreso
  agregarIngreso() : void{
    if(this.ingreso.descripcion === null || this.ingreso.valor === 0){
      alert("Algún campo está vacío");
    }else{
      this.servicioIngreso.crearIngreso(this.ingreso).subscribe(resp =>{
        //una vez se envíe el objeto local se define en blanco
        this.ingresoCreado.emit(this.ingreso);
        this.ingreso = new Ingreso();
        alert("El ingreso se creó satisfactoriamente")
      },
      err=>{
        alert("No se pudo crear el ingreso: " + err)
      }
        );
    }

  }

}
