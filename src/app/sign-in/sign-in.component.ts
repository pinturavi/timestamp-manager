import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit() {
   
  }

  onSignIn() {
    this.authService.logIn(this.signInForm.value).subscribe((response: any) => {
      if(response.ok)
      localStorage.setItem('idToken', response._body);
    });   
  }

}
