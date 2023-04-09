import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { TasksService } from '../../tasks.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css'],
})
export class AllTodosComponent implements OnInit {
  users$;
  tasks$;
  totalItems: any = 0;
  totalPages: number = 0;
  title: string = '';
  searchInput = new FormControl('');

  table_columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'العنوان' },
    { name: 'description', label: 'الوصف' },
    { name: 'user', label: 'المستخدم' },
    { name: 'deadline', label: 'الموعد النهائي' },
  ];

  // pagination
  current = 0;
  perPage = 10;
  onGoTo(page: number): void {
    this.current = page;
    this.paginate(this.current, this.perPage);
  }
  onNext(page: number): void {
    if (this.current <= this.totalPages) {
      this.current = page + 1;
      this.paginate(this.current, this.perPage);
    }
  }
  onPrevious(page: number): void {
    if (this.current >= 1) {
      this.current = page - 1;
      this.paginate(this.current, this.perPage);
    }
  }
  paginate(current: number, perPage: number) {
    this.getAllTasks();
  }
  constructor(
    private tasksservice: TasksService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((res) => this.tasksservice.getAllTasks(res, this.current))
      )
      .subscribe((response) => {
        this.tasks$ = response['tasks'];
      });
    this.getAllTasks();
    this.getAllUsers();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['totalItems'] && changes['totalItems'].currentValue)
    ) {
      this.paginate(this.current, this.perPage);
    }
  }

  getAllTasks() {
    this.tasksservice
      .getAllTasks(this.title, this.current)
      .subscribe((response) => {
        this.tasks$ = response['tasks'];
        this.totalItems = response['totalItems'];
        this.totalPages = response['totalPages'];
      });
  }
  getAllUsers() {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users$ = users;
    });
  }
  // getCurrentUserTasks() {
  //   this.tasksservice.getCurrentUserTasks().subscribe((response) => {
  //     this.tasks$ = response['tasks'];
  //     this.totalItems = response['totalItems'];
  //     this.totalPages = response['totalPages'];
  //   });
  // }
}
