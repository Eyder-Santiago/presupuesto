import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  },
  {
    path: 'eliminar',
    component:EliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
