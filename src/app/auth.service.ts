import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';

const baseURL="http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }

  registerUser(userDetails:any){
    return this.http.post(`${baseURL}/api/users`, userDetails);
   }

   logIn(userDetails:any){
    return this.http.post('http://localhost:3000/api/auth', userDetails);
  }

  getUserDetails(userDetails:any){
    const headers:Headers=new Headers({'x-auth-token':localStorage.getItem('idToken')});
        return this.http.request(`http://localhost:3000/api/users/me?email=${userDetails.email}`, new RequestOptions({
          'method':RequestMethod.Get,
           'headers':headers
        }));
  }

  isAuthenticated(){
    return null !== localStorage.getItem('idToken');
  }
}
