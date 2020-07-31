import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordShow = false;
  faEye = faEye;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  passwordDisplay(): void {
    console.log('password display function');
    this.passwordShow = ! this.passwordShow;
    console.log ('show password: ' + this.passwordShow);
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
