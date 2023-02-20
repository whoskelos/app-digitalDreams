import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000/api/users';
  authSubject = new BehaviorSubject(false);
  private token!: string;

  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/signup`,
    user).pipe(tap(
      (res:JwtResponse) => {
        if (res) {
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/signin`,
    user).pipe(tap(
      (res:JwtResponse) => {
        if (res) {
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  logout() {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token:string, expiresIn:string): void {
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRES_IN",expiresIn);
    this.token = token;
  }

  // private getToken():string {
  //   if (!this.token) {
  //     this.token = localStorage.getItem("ACCESS_TOKEN");
  //   }
  //   return this.token;
  // }


}
