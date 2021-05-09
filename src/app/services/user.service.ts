import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(public http: HttpClient) { }

  postUser(user: User){
    // return this.http.post(environment.apiBaseUrl+'/register',user);
    return this.http.post('http://localhost:3000/api/register',user);
  }

  loginUser(user: User){
    console.log("**");
    // return this.http.post(environment.apiBaseUrl+'/register',user);
    return this.http.post('http://localhost:3000/api/login',user);
  }


}
