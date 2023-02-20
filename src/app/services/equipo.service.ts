import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Equipo } from "../models/Equipo";
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  api = "http://localhost:3000/api/equipos";

  equipos !: Equipo[];

  constructor(private http: HttpClient) { }

  //Obtenemos todos los equipos de la base de datos
  getEquipos() {
    return this.http.get<Equipo[]>(this.api);
  }

  getEquipoById(id: string) {
    return this.http.get<Equipo>(`${this.api}/${id}`);
  }

}
