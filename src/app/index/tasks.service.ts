import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  rootUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  getAllTasks(page: number, perPage: number) {
    return this.http.get(
      `${this.rootUrl}/tasks?page=${page}&perPage=${perPage}`
    );
  }
  getCurrentUserTasks() {
    return this.http.get(`${this.rootUrl}/tasks/user-tasks`);
  }
  getTasksByUser(userId: string) {
    return this.http.get(`${this.rootUrl}/tasks/${userId}/user-tasks`);
  }

  getTaskById(id: string) {
    return this.http.get(`${this.rootUrl}/tasks/${id}`);
  }
  createTask(task: any) {
    return this.http.post(`${this.rootUrl}/tasks`, task);
  }
  createTaskByCurrentUser(task: any) {
    return this.http.post(`${this.rootUrl}/tasks/user-tasks`, task);
  }
  createTaskForSpecificUser(task: any) {
    return this.http.post(`${this.rootUrl}/tasks/user-tasks/create`, task);
  }
  updateTask(id: string, task: any) {
    return this.http.put(`${this.rootUrl}/tasks/${id}`, task);
  }
  deleteTask(id: string) {
    return this.http.delete(`${this.rootUrl}/tasks/${id}`);
  }
}
