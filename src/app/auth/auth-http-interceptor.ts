import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      withCredentials: true,
    });
    return next.handle(cloned).pipe(
      tap(
        (event) => {
          console.log(event);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }
}
