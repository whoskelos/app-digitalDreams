import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
      
  }

  onRegister(form: NgForm) {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/login');
    });
  }

}
