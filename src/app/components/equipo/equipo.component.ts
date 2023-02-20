import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/models/Equipo';
import { EquipoService } from 'src/app/services/equipo.service';

//SweetAlert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  public id !: string;
  public equipo !: Equipo;
  public oculto : boolean = true;
  constructor(route: ActivatedRoute, public equipoService: EquipoService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getEquipo();
  }

  getEquipo() {
    this.equipoService.getEquipoById(this.id)
      .subscribe(equipo => {
        console.log(equipo);
        this.equipo = equipo
      });
  }

  mostrarEnlace() {
    if (this.oculto) {
      this.oculto = false;
    }
  }
  mostrarCaracteristicas() {
    if (!this.oculto) {
      this.oculto = true;
    }
  }

  marcarFavorito(id: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ha marcado este equipo como favorito',
      showConfirmButton: false,
      timer: 1500
    });
  }


}

