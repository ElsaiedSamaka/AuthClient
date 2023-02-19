import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      catchError((err) => {
        return of({ notEmailUnique: true });
      })
    );
  };
}
