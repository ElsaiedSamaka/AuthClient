import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      map((value) => {
        if (value.message === 'User email is available!') {
          return null;
        } else if (value.message === 'Failed! Email is already in use!') {
          return { notEmailUnique: true };
        }
        return null;
      }),
      catchError((err) => {
        return of({ notEmailUnique: true });
      })
    );
  };
}
