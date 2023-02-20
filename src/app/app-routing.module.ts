import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { VistaEquiposComponent } from './components/vista-equipos/vista-equipos.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
  },
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: VistaEquiposComponent },
  { path: 'registro', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }