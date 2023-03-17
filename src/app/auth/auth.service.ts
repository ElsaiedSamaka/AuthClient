import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface EmailAvailableResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // rootUrl = 'http://localhost:3000';
  rootUrl = 'https://authbackend-iher.onrender.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  // TODO: Right now we are using a BehaviorSubject to store the signed in status of the user
  // This is not the best way to do this, but it is the easiest way to get started
  // We will need to change this public property to a private property
  signedin$ = new BehaviorSubject<boolean>(null);

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
      .post<any>(
        `${this.rootUrl}/api/auth/signup`,
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation,
          phonenumber: phonenumber,
        },
        { withCredentials: true }
      )
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
      tap(({ authentication }) => {
        this.signedin$.next(authentication);
      })
    );
  }
  // signout will be called when the user clicks the signout button
  // we will send a request to the server to sign the user out
  signout() {
    return this.http.post<any>(`${this.rootUrl}/api/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
  // signin will be called when the user submits the signin form
  // we will send the user's credentials to the server
  signin(email: string, password: string) {
    return this.http
      .post<any>(`${this.rootUrl}/api/auth/signin`, {
        email: email,
        password: password,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  googleLogin() {
    return this.http
      .get(`${this.rootUrl}/api/auth/google`, {
        headers: this.httpOptions.headers,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
  facebookLogin() {
    return this.http
      .get(`${this.rootUrl}/api/auth/facebook`, {
        headers: this.httpOptions.headers,
      })
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
