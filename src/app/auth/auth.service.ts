import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  emailAvailable(email: string) {
    return this.http.post<any>('http://localhost:3000/api/auth/username', {
      email: email,
    });
  }
  signup(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    phonenumber: string
  ) {
    return this.http.post<any>('http://localhost:3000/api/auth/signup', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      phonenumber: phonenumber,
    });
  }
}
