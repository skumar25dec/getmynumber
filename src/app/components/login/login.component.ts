import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Jsonp, Http,HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';

//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


//body:{"user_auth":{"user_name":"admin","password":"21232f297a57a5a743894a0e4a801fc3","version":"1"},"application_name":"RestTest"};


constructor(private router: Router) {

}
  ngOnInit() {
  }
  haha(){
//  http
  //.post('/api/developers/add', body).subscribe(...);
  }
   }
