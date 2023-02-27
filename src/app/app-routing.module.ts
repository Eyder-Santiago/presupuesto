import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'egresos',
    loadChildren: () => import('./egresos/egresos.module').then(m => m.EgresosModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos.module').then(m => m.IngresosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
