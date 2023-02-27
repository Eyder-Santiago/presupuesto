import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { IngresosRoutingModule } from './ingresos-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    EliminarComponent,
    LayoutComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IngresosRoutingModule,
    HttpClientModule
  ]
})
export class IngresosModule { }
