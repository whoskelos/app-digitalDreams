import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { FormsModule } from "@angular/forms";
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  loading: boolean = false;

  constructor(private authService: AuthService, 
    private router:Router, 
    private toastr: ToastrService, 
    private errorService: ErrorService) { }

  ngOnInit(): void {
      
  }

  onLogin(f: NgForm) {     
    if (f.value.email == '' || f.value.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
    }

    const user: User = {
      email: this.email,
      password: this.password
    }

    this.loading = true;
    this.authService.login(f.value).subscribe({
      next: (token) => {
        localStorage.setItem('token', token.accessToken);
        this.router.navigate(['/home'])
      },
      error: (e: HttpErrorResponse) => {
        this.errorService.msgError(e);
        this.loading = false;
      }
    })
  }

}
