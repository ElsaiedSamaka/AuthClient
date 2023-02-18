import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate = (control: AbstractControl) => {
    const { value } = control;
    const user = JSON.stringify(value);
    console.log(user);
    return this.http.post<any>('http://localhost:3000/api/auth/username', {
      email: value,
    });
  };
}
