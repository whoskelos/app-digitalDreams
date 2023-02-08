import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './components/home/home.component';
import { VistaEquiposComponent } from './components/vista-equipos/vista-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipoComponent,
    HomeComponent,
    VistaEquiposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
