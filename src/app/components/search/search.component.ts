import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Jsonp, Http,HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

//import { LoginService } from './login.service';
import { NumService } from '../../services/app.service';
import { Number } from '../../services/data';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})



export class SearchComponent implements OnInit {

searchStr: string;
samplenumber : Number[];
title = 'Search String';

body:{"user_auth":{"user_name":"admin","password":"21232f297a57a5a743894a0e4a801fc3","version":"1"},"application_name":"RestTest"};

  constructor(private numService: NumService) { }
  getNumbers(): void {
    this.samplenumber = this.numService.getNumbers();
  };


  ngOnInit(): void {
    this.getNumbers();
  }


  searchNumber(){
    alert(this.searchStr);
  };


  compare(){
    alert(this.samplenumber[1].checkbox);
  };
  checkbox(i){
    //alert(value);
    //this.samplenumber[i].checkbox = value;
    this.samplenumber[i].checkbox = (this.samplenumber[i].checkbox) ? false : true;
  };

  /*constructor() { }

  ngOnInit() {
  }
  haha(){
//  http
  //.post('/api/developers/add', body).subscribe(...);
  }*/
}
