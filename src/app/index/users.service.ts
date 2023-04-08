import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  rootUrl = 'http://localhost:3000/api';
  getAllUsers() {
    return this.http.get(`${this.rootUrl}/users`);
  }
}
