import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  constructor(public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signup']);
  }

}
