import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  // we need to inject the AuthService into our app component
  // we also need to subscribe to the signedin$ subject
  constructor(private authService: AuthService) {
    this.signedin$ = authService.signedin$;
    // console.log(authService.signedin$.value);
  }
  // whenever our app component is initialized, we want to check if the user is authenticated
  // if they are, we should set the signedin$ subject to true
  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
    // test log out functionality
    // setTimeout(() => {
    //   this.authService.signout().subscribe(() => {});
    // }, 9000);
  }
}
