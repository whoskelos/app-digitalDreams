import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-vista-usuarios',
  templateUrl: './vista-usuarios.component.html',
  styleUrls: ['./vista-usuarios.component.css']
})
export class VistaUsuariosComponent implements OnInit {


  constructor(public userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.userService.getUsuarios()
      .subscribe({
        next: (res) => {
          this.userService.usuarios = res;
        },
        error: (e) => {
          this.errorService.msgError(e);
        }
      });
  }

  addUsuario(form: NgForm) {
    if (form.value.email == '' || form.value.password == '' || form.value.name == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
    } else {
      if (form.value._id) {
        this.userService.actualizarUsuario(form.value).subscribe({
          next: (res) => {
            this.toastr.success(`Usuario ${form.value.name} editado correctamente`, 'Usuario editado');
            this.listarUsuarios();
            this.resetForm(form);
          },
          error: (e) => {
            this.errorService.msgError(e);
          }
        })
      } else {
        if (form.value.email == '' || form.value.password == '' || form.value.name == '') {
          this.toastr.error('Todos los campos son obligatorios', 'Error');
        } else {
          this.userService.crearUsuario(form.value)
            .subscribe({
              next: (res) => {
                this.toastr.success(`Usuario ${form.value.email} creado correctamente`, 'Usuario Registrado');
                this.listarUsuarios();
                this.resetForm(form);
              },
              error: (e) => {
                this.errorService.msgError(e);
              }
            });
        }
      }
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
            this.listarUsuarios();
            Swal.fire(
              'Eliminado!',
              'Usuario eliminado!',
              'success'
            )
          });
      }
    });
  }

  editarUser(usuario: User) {
    this.userService.usuarioSeleccionado = usuario;
  }

  resetForm(form: NgForm) {
    form.reset();
    this.listarUsuarios();
  }

}
