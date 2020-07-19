import { Component, OnInit } from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordShow = false;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
  }

  passwordDisplay(): void {
    console.log('password display function');
    this.passwordShow = ! this.passwordShow;
    console.log ('show password: ' + this.passwordShow);
  }
}
