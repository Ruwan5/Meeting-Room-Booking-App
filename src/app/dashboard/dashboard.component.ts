import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service'
import { User } from "app/models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  rooms: any;
  bookedRooms: any;
  currentUser: User;

  constructor(private roomService: RoomService, ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }



  ngOnInit() {
    this.roomService.getAllRooms().forEach(res=>{
      console.log(res);
      this.rooms = res;
    })

    var data = {
      "email" : this.currentUser.email
    }

    this.roomService.getAllBookedRooms(data).forEach(res=>{
      console.log(res);
      this.bookedRooms = res;
    })

  }

}
