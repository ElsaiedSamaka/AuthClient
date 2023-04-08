import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, of } from 'rxjs';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root',
})
export class TaskResolverService implements Resolve<any> {
  constructor(private tasksService: TasksService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this.tasksService.getTaskById(id).pipe(
      catchError((err) => {
        this.router.navigate(['index/not-found']);
        return of(null);
      })
    );
  }
}
