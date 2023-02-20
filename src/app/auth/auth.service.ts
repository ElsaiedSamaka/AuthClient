import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface EmailAvailableResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'http://localhost:3000';
  signedin$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // emailAvailable will be called whenever the user types in the email field
  // we will send the email to the server and check if it is available
  emailAvailable(email: string) {
    return this.http.post<EmailAvailableResponse>(
      `${this.rootUrl}/api/auth/username`,
      {
        email: email,
      }
    );
  }
  // signup will be called when the user submits the signup form
  // we will send the user's credentials to the server
  signup(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    phonenumber: string
  ) {
    return this.http
      .post<any>(`${this.rootUrl}/api/auth/signup`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        phonenumber: phonenumber,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  // checkAuth will be called whenever our app component is initialized
  // we can use this to check if the user is authenticated
  checkAuth() {
    return this.http.get<any>(`${this.rootUrl}/api/auth/signedin`).pipe(
      tap((response) => {
        // this.signedin$.next(authenticated);
        console.log(response);
      })
    );
  }
}
