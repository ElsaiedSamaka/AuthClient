import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import SiginComponent
import { SigninComponent } from './signin/signin.component';
// import SigninComponent
import { SignupComponent } from './signup/signup.component';

// Define routes
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
