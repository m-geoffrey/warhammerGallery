import { Component, OnInit } from '@angular/core';
import { faCoffee, faEnvelope, faEye, faMailBulk } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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
