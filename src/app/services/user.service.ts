import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = "https://fragrant-fire-8640.fly.dev/api/users";

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
    return this.http.post(`${this.api}/registro`,usuario);
  }

  deleteUsuario(id: any) {
    return this.http.delete(`${this.api}/${id}`);
  }

  actualizarUsuario(usuario: User) {
    return this.http.put(`${this.api}/${usuario._id}`, usuario);
  }
}
