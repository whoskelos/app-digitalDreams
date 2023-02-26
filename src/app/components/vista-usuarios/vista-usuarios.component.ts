import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vista-usuarios',
  templateUrl: './vista-usuarios.component.html',
  styleUrls: ['./vista-usuarios.component.css']
})
export class VistaUsuariosComponent implements OnInit {


  constructor(public userService: UserService, router: Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.userService.getUsuarios()
      .subscribe(res => this.userService.usuarios = res);
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.userService.actualizarUsuario(form.value)
        .subscribe(res => {
          Swal.fire({
            icon: 'success',
            title: 'Usuario editado correctamente!',
            showConfirmButton: false,
            timer: 1000
          });
        });
    } else {
      this.userService.crearUsuario(form.value)
        .subscribe(res => {
          this.listarUsuarios();
          form.reset();
        });
    }
  }

  eliminarUser(id: any) {
    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUsuario(id)
          .subscribe(res => {
            Swal.fire(
              'Eliminado!',
              'Usuario eliminado!',
              'success'
            )
            this.listarUsuarios();
          });
      }
    });
  }

  editarUser(usuario: User) {
    this.userService.usuarioSeleccionado = usuario;
  }

}
