import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TasksService } from '../../tasks.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  showModel = false;
  taskForm: FormGroup;
  defaultDeadline = moment().add(1, 'week').format('YYYY-MM-DD');
  users$: any = [];
  constructor(
    private tasksService: TasksService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.taskForm = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      userId: new FormControl(''),
      deadline: new FormControl(this.defaultDeadline),
    });
    this.getAllUsers();
  }
  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users$ = users;
    });
  }
  onClick() {
    this.showModel = !this.showModel;
  }
  onSubmit() {
    if (this.taskForm.invalid) return;
    this.tasksService.createTaskForSpecificUser(this.taskForm.value).subscribe({
      next: (res) => {
        // console.log(res);
      },
      error: (err) => {
        // console.log(err);
      },
      complete: () => {
        console.log('completed');
        this.showModel = !this.showModel;
      },
    });
    console.log(this.taskForm.value);
  }
}
