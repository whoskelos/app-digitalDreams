import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  equiposMasValorados !: Equipo[];

  constructor(public equipoService: EquipoService) {}


  //obtener los equipos y realizar una funcion que me devuelva 3 equipos que tengan la media mas alta de valoraciones
  
  // getEquipos(): void {
  //   this.equipoService.getEquipos()
  //   .subscribe(equipos => this.equiposMasValorados = equipos);
  //   console.log(this.equiposMasValorados);
  // }
  

}
