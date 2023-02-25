import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { FormsModule } from '@angular/forms';
import { EgresosModule } from './egresos/egresos.module';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EgresosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
