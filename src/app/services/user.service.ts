import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = "http://localhost:3000/api/users";

  usuarioSeleccionado: User = {
    name: "",
    email: "",
    password: "",
    createdAt: ""
  };
  usuarios !: User[];

  constructor(private http:HttpClient) { }

  getUsuarios() {
    return this.http.get<User[]>(this.api);
  }

  crearUsuario(usuario: User) {
    return this.http.post(`${this.api}/signup`,usuario);
  }

  deleteUsuario(id: any) {
    return this.http.delete(`${this.api}/${id}`);
  }

  actualizarUsuario(usuario: User) {
    return this.http.put(`${this.api}/${usuario._id}`, usuario);
  }
}
