import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service'
declare var $: any;
import {User} from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  currentUser: User;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    $(function() {

      $('#login-form-link').click(function(e) {
          $("#login-form").delay(100).fadeIn(100);
          $("#register-form").fadeOut(100);
          $('#register-form-link').removeClass('active');
          $(this).addClass('active');
          e.preventDefault();
      });
      $('#register-form-link').click(function(e) {
          $("#register-form").delay(100).fadeIn(100);
          $("#login-form").fadeOut(100);
          $('#login-form-link').removeClass('active');
          $(this).addClass('active');
          e.preventDefault();
      });

  });
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {

        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);

      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  login(form: NgForm){
    this.userService.loginUser(form.value).subscribe(
        res =>{
          console.log(res);
          if(res[0]){

            localStorage.setItem('currentUser', JSON.stringify(res[0]));
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

            this.router.navigateByUrl('/dashboard');
          } else if(!res[0]) {
            this.serverErrorMessages = 'Email or Password does not match';
          }



        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: '',
      role: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
