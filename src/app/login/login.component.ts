import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential:User[]=[];
  msg='';

  constructor(public route:Router, public userS:UserService) { 
    this.userS.validateUser().subscribe( 
      (userList)=> this.credential=userList,
      (error)=>console.log(error));
  }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
      for(let user of this.credential){
        if(user.uname==loginForm.value.uname && user.pwd==loginForm.value.pwd){
          sessionStorage.setItem("key",user.uname);
          this.route.navigate(["test"]);
        }
      }
    this.msg='Login Failed'; 
    loginForm.resetForm();
  }  
}
