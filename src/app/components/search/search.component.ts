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
Phone = {
number1: '',
number2: '',
number3: '',
number4: '',
number5: '',
number6: '',
number7: '',
number8: '',
number9: '',
number10: '',
};

update(numbers,n) {
  var index = 0;
  if(n==1){
  this.Phone.number1 = numbers;
  }
  else
  if(n==2){
  this.Phone.number2 = numbers;
  }
  else
  if(n==3){
  this.Phone.number3 = numbers;
  }
  else
  if(n==4){
  this.Phone.number4 = numbers;
  }
  else
  if(n==5){
  this.Phone.number5 = numbers;
  }
  else
  if(n==6){
  this.Phone.number6 = numbers;
  }
  else
  if(n==7){
  this.Phone.number7 = numbers;
  }
  else
  if(n==8){
  this.Phone.number8 = numbers;
  }
  else
  if(n==9){
  this.Phone.number9 = numbers;
  }
  else
  if(n==10){
  this.Phone.number10 = numbers;
  }
  this.searchStr =  this.Phone.number1 + this.Phone.number2 + this.Phone.number3 + this.Phone.number4 + this.Phone.number5 + this.Phone.number6 + this.Phone.number7 + this.Phone.number8 + this.Phone.number9 + this.Phone.number10 +''
//alert(this.searchStr);
}


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
