import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  loading: boolean = false;

  constructor(private authService: AuthService, 
    private router:Router, 
    private toastr: ToastrService,
    private errorService: ErrorService) {}

  ngOnInit(): void {
      
  }

  onRegister(f: NgForm) {
    if (f.value.email == '' || f.value.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
    }

    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    this.loading = true;

    this.authService.register(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
        this.router.navigateByUrl('/login');
      },
      error: (e) => {
        this.loading = false;
        this.errorService.msgError(e);
      }
    })
  }
}
