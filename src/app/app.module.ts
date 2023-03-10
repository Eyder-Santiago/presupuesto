import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EgresosModule } from './egresos/egresos.module';
import { IngresosModule } from './ingresos/ingresos.module';
import { HeaderComponent } from './componentes/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EgresosModule,
    IngresosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
