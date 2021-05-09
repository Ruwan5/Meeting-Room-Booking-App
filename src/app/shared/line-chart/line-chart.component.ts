import { Component, OnInit, Input} from '@angular/core';

import { NgForm } from '@angular/forms';

import { RoomService } from '../../services/room.service'
import {User} from '../../models/user.model';
import { Router } from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],

})


export class LineChartComponent implements OnInit {

  currentUser: User;
  formdata;
  message;

  @Input() bookedRooms: []


  constructor(private roomService: RoomService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser.fullName;
    this.currentUser.role;
    this.currentUser.email;
  }






  ngOnInit() {

      this.formdata = new FormGroup({
         name: new FormControl(""),
         description: new FormControl(""),
         location: new FormControl("")

      });
  }


  onClickSubmit(data) {
    this.roomService.addRoom(data).subscribe(
      res=>{
        console.log(res);
        if(res){
          this.message = true;
        } else{
          this.message = false;
        }

      }
    )

    // this.formdata.resetForm();

  }



}
