import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(public http: HttpClient) { }


  addRoom(data){
    console.log(data)
    // return this.http.post(environment.apiBaseUrl+'/register',user);
    return this.http.post('http://localhost:3000/api/newroom',data);
  }

  getAllRooms(){
    return this.http.get('http://localhost:3000/api/getrooms');
  }

  getRoomById(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/getroombyid', data);
  }

  bookRoom(data){
    return this.http.post('http://localhost:3000/api/bookroom', data);
  }

  getAllBookedRooms(data){
    console.log(data);
    return this.http.post('http://localhost:3000/api/getbookedrooms', data);
  }




}
