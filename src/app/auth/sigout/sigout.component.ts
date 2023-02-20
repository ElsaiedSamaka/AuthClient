import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sigout',
  templateUrl: './sigout.component.html',
  styleUrls: ['./sigout.component.css'],
})
export class SigoutComponent {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.signout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
