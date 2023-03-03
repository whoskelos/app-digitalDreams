import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipo } from "src/app/models/Equipo";
import { EquipoService } from "src/app/services/equipo.service";

//SweetAlert
import Swal from 'sweetalert2';
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

  //eliminar
  eliminarEquipo(id: string) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No va a ser posible revertir esta accion.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipoService.deleteEquipo(id)
        .subscribe(res => {
          Swal.fire(
            'Eliminado!',
            'El equipo ha sido eliminado',
            'success'
          )
          this.getEquipos();
        });
      }
    })
  }

  //ordernar alfabeticamente
  orderAlfa() {
    this.equipos.sort((a,b) => (a.modelo > b.modelo) ? 1 : -1);
  }

  //ordernar por precio descendente
  orderPrecioDesc() {
    this.equipos.sort((a,b) => (b.precio > a.precio) ? 1 : -1);
  }

  //ordenar por ram de mas a menos
  orderRAM() {
    this.equipos.sort((a,b) => (b.ram > a.ram) ? 1 : -1);
  }


}
