import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enableTest=false;
  credential={uname:'testUser',pwd:'testPass'};
  msg='';
  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    if(this.credential.uname==loginForm.value.uname && this.credential.pwd==loginForm.value.pwd){
      this.enableTest=true;
    }
    else{
      this.enableTest=false;
      this.msg='Login Failed';
    }
    loginForm.resetForm();
  }
}
