import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser.fullName;
    this.currentUser.role;
    this.currentUser.email;
  }

  ngOnInit() {

  }

}
