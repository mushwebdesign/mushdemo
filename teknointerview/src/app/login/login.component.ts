import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //connect form html to ts
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  userLoggedIn: String;
  alert: boolean = false;
  constructor(private router: Router) {
    if (localStorage.getItem('username') != null) {
      this.userLoggedIn = localStorage.getItem('username');
      // localStorage.removeItem('username');
    }
    // else {
    //   this.userLoggedIn = null;
    // }
    console.log('Hello Mush :' + this.userLoggedIn);
  }

  onSubmit() {
    console.log(this.loginForm);
    if (
      this.loginForm.get('email').value === 'admin@test.com' &&
      this.loginForm.get('password').value === 'Admin123!'
    ) {
      localStorage.setItem('username', this.loginForm.get('email').value);
      this.userLoggedIn = this.loginForm.get('email').value;
      this.router.navigate(['Custtable']);
    } else {
      this.alert = true;
    }
  }
  // loginForm.get('email') is replaced with this function
  get email() {
    return this.loginForm.get('email');
  }
  // loginForm.get('password') is replaced with this function
  get password() {
    return this.loginForm.get('password');
  }
}
