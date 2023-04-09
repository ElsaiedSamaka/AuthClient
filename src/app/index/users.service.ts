import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  // rootUrl = 'http://localhost:3000/api';
  rootUrl = 'https://authbackend-iher.onrender.com/api';

  getAllUsers() {
    return this.http.get(`${this.rootUrl}/users`);
  }
}
