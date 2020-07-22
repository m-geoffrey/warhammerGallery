import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

import { MustMatch } from '../_helpers/must-match.validator';

// custom validator to check that two fields match


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordShow = false;
  faEye = faEye;
  registerForm: FormGroup;

  get f(): object { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  passwordDisplay(): void {
    console.log('password display function');
    this.passwordShow = ! this.passwordShow;
    console.log ('show password: ' + this.passwordShow);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      // console.log('invalid form');
      return;
    }
    if (this.registerForm.valid) {
      // console.log(form.value);
      console.log('form valid / submit');
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
  }

}
