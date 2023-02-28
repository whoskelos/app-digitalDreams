import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  datosPeli = {
    portatil: "",
    modelo: "",
    precio: 0,
    so: "",
    cpu: "",
    ram: 0,
    almacenamiento: "",
    gama: "",
    valoracion: [],
    opiniones: [],
    foto: "",
    enlace: ""
  }

  constructor(route: ActivatedRoute, 
    private router:Router, 
    public equipoService: EquipoService,
    private toastr: ToastrService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getEquipo();
  }

  getEquipo() {
    this.equipoService.getEquipoById(this.id)
      .subscribe(equipo => {
        this.equipo = equipo;
        this.datosPeli = equipo;
      });
  }

  editarEquipo(valores: any) {
    this.equipoService.editEquipo(this.id, this.datosPeli)
      .subscribe({
        next: (res) => {
          this.toastr.success('Equipo editado correctamente','Equipo editado');
        }
      });
  }
}

