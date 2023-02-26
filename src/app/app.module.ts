import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './components/home/home.component';
import { VistaEquiposComponent } from './components/vista-equipos/vista-equipos.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './auth/auth.guard';
import { VistaUsuariosComponent } from './components/vista-usuarios/vista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquipoComponent,
    HomeComponent,
    VistaEquiposComponent,
    VistaUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
