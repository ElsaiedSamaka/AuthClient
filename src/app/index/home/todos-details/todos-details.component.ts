import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css'],
})
export class TodosDetailsComponent implements OnInit {
  task: Object;
  constructor(private route: ActivatedRoute) {
    //works just fine
    // this.task = this.route.snapshot.data['task'];
  }
  ngOnInit() {
    // below code will resualt in a famous error
    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.tasksService.getTask(id);
    //     })
    //   )
    //   .subscribe((task) => {
    //     this.task = task;
    //   });
    this.getTask();
  }
  getTask() {
    this.route.data.subscribe((data) => {
      this.task = data['task'];
    });
  }
}
