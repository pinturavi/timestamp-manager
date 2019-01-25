import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: '', component: SignInComponent },
  {path:'timesheet', component: TimesheetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
