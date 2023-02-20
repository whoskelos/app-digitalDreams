import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

//SweetAlert
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000/api/users';
  authSubject = new BehaviorSubject(false);
  private token!: string;
  username !: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/signup`,
    user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: 'Registro',
              text: 'Se ha registrado correctamente 😄',
            });
            //guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.username = res.dataUser.email;
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message,
          });
        }
      ))
  }

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/signin`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            //guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);

          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message,
          })
        }
      ))
  }

  logout() {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.router.navigateByUrl('/auth/login');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  loggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }


}
