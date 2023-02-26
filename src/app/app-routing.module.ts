import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { VistaEquiposComponent } from './components/vista-equipos/vista-equipos.component';
import { AuthGuard } from './auth/auth.guard';
import { EquipoComponent } from './components/equipo/equipo.component';
import { VistaUsuariosComponent } from './components/vista-usuarios/vista-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipos',
    component: VistaEquiposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipos/:id',
    component: EquipoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: VistaUsuariosComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }