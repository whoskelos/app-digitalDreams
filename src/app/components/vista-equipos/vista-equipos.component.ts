import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipo } from "src/app/models/Equipo";
import { EquipoService } from "src/app/services/equipo.service";

@Component({
  selector: 'app-vista-equipos',
  templateUrl: './vista-equipos.component.html',
  styleUrls: ['./vista-equipos.component.css']
})
export class VistaEquiposComponent {
  public equipos !: Equipo[];

  constructor(public equipoService: EquipoService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  //obtengo todos los equipos
  getEquipos(): void {
    this.equipoService.getEquipos()
    .subscribe(equipos => this.equipos = equipos);
  }
}
