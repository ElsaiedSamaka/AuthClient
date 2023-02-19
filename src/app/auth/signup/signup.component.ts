import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from "../validators/match-password";
import { UniqueEmail } from '../validators/unique-email';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
        [this.uniqueEmail.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
      // TODO: Add country code
      // countrycode: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(15),
      // ]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25),
        Validators.pattern('^[0-9]*$'),
      ]),
    },
    { validators: [this.matchPassword.validate, this.uniqueEmail.validate] }
  );
  ngOnInit(): void {}
  constructor(
    private matchPassword: MatchPassword,
    private uniqueEmail: UniqueEmail
  ) {}
}
