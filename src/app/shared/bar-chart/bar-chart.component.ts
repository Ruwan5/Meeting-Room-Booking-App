import { Component, Input, OnInit } from "@angular/core";
import { RoomService } from '../../services/room.service'
import { Observable } from 'rxjs';
import { map } from "rxjs-compat/operator/map";
declare var $: any;
import {Room} from '../../models/room.model';
import { User } from "app/models/user.model";
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})


export class BarChartComponent implements OnInit {

  divflag;
  rm: Room;
  selsectedRoom;
  currentUser: User;
  message;
  formdata;
  selectedRoomimg;


  constructor(private roomService: RoomService, private toastr: ToastrService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser.fullName;
    this.currentUser.role;
    this.currentUser.email;
  }

  @Input() rooms: []


  ngOnInit(){




  }

  getDetails(name){
    this.divflag = true;
    // console.log(id.textContent.toString())

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    // console.log(this.rm.id)
    var data = {
      "name" : name.textContent
    }

    this.roomService.getRoomById(data).subscribe(res=>{

      console.log("Came")
      this.selsectedRoom = res[0];
      var img = this.selsectedRoom['img'];
      console.log(img);
      console.log(res);

      this.formdata = new FormGroup({
        date: new FormControl(""),
        time: new FormControl(""),
        createdDate: new FormControl(dateTime),
        name:new FormControl(this.currentUser.fullName),
        email: new FormControl(this.currentUser.email),
        img: new FormControl(this.selsectedRoom['img']),
        roomName: new FormControl(this.selsectedRoom['name'])

     });
    })
    // console.log(this.rm.id);
  }


  back(){
    console.log("Back")
    this.divflag = false;
  }

  onClickSubmit(data) {


    console.log(data);
    this.roomService.bookRoom(data).subscribe(
      res=>{
        console.log(res);
        if(res){
          console.log("Meeting Room has been booked successfully ");
          this.message = "Meeting Room has been booked successfully "
          this.toastr.success('Meeting Room has been booked successfully', 'Success!',{
            timeOut: 6000,
            positionClass: 'toast-top-center'

          });
        } else{
          console.log("This meeting room has been already booked! Please try another time");
          this.message = "This meeting room has been already booked! Please try again"
          this.toastr.error('This meeting room has been already booked', 'Please try again!',{
            timeOut: 6000,
            positionClass: 'toast-top-center'

          });
        }

      }
    )

    // this.formdata.resetForm();
    this.divflag = false;

  }

}
