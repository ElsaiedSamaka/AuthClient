import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css'],
})
export class AllTodosComponent implements OnInit {
  users$;
  tasks$;
  table_columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'العنوان' },
    { name: 'description', label: 'الوصف' },
    { name: 'user', label: 'المستخدم' },
    { name: 'deadline', label: 'الموعد النهائي' },
  ];

  constructor(private tasksservice: TasksService) {}

  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.tasksservice.getAllTasks().subscribe((response) => {
      this.tasks$ = response['tasks'];
      console.log(this.tasks$);
    });
  }
  getCurrentUserTasks() {
    this.tasksservice.getCurrentUserTasks().subscribe((response) => {
      this.tasks$ = response['tasks'];
    });
  }

  getTasks() {
    // i should pipe to the value changes of the input
    // and make an api call to the backend based on the value
    // using switchMap() to cancel the previous request
    // ref: https://medium.com/lapis/searching-through-a-list-reactively-in-angular-c61c9d1832df
    // this.tasks$ = this.tasksservice.getTasks().pipe(
    //   map((tasks: string) => tasks.trim()),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   tap((tasks) => {
    //     this.tasks$ = tasks;
    //   })
    // );
  }
  filterTasks() {
    // this.tasksservice.filterTasks().subscribe((tasks) => {
    //   this.tasks$ = tasks;
    // });
  }
}
