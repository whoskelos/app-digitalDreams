import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

//SweetAlert
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'https://fragrant-fire-8640.fly.dev/api/users';
  authSubject = new BehaviorSubject(false);
  private token!: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.AUTH_SERVER}/signup`,user)
  }

  login(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.AUTH_SERVER}/signin`,user)
  }

  logout() {
    this.token = '';
    localStorage.removeItem("token");
    this.router.navigateByUrl('/auth/login');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
