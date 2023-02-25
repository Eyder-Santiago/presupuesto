import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ListadoComponent } from './listado/listado.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EgresosRoutingModule } from './egresos-routing.module';
import { HttpClientModule } from '@angular/common/http'; //sin la importación de esto da un error magistral



@NgModule({
  declarations: [
    CrearComponent,
    LayoutComponent,
    ListadoComponent,
    EditarComponent,
    EliminarComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    EgresosRoutingModule,
    HttpClientModule
  ]
})
export class EgresosModule { }
