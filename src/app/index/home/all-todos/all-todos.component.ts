import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css'],
})
export class AllTodosComponent implements OnInit {
  users$;
  tasks$: any[] = [];
  totalItems: any = 0;
  totalPages: any = 0;
  table_columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'العنوان' },
    { name: 'description', label: 'الوصف' },
    { name: 'user', label: 'المستخدم' },
    { name: 'deadline', label: 'الموعد النهائي' },
  ];

  // pagination
  current = 0;
  perPage = 5;
  // total = Math.ceil(this.totalItems / this.perPage);
  onGoTo(page: number): void {
    this.current = page;
    this.paginate(this.current, this.perPage);
  }
  onNext(page: number): void {
    if (this.current < this.totalItems) {
      this.current = page + 1;
      this.paginate(this.current, this.perPage);
    }
  }
  onPrevious(page: number): void {
    if (this.current > 1) {
      this.current = page - 1;
      this.paginate(this.current, this.perPage);
    }
  }
  paginate(current: number, perPage: number) {
    this.getAllTasks();
  }
  constructor(private tasksservice: TasksService) {}

  ngOnInit() {
    this.getAllTasks();
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
      .getAllTasks(this.current, this.perPage)
      .subscribe((response) => {
        console.log(response);
        this.tasks$ = response['tasks'];
        this.totalItems = response['totalItems'];
        this.totalPages = response['totalPages'];
      });
  }
  getCurrentUserTasks() {
    this.tasksservice.getCurrentUserTasks().subscribe((response) => {
      this.tasks$ = response['tasks'];
      this.totalItems = response['totalItems'];
      this.totalPages = response['totalPages'];
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
