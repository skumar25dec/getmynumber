import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NumService } from '../../services/app.service';
import { Number } from '../../services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit {
  searchStr: string;
  samplenumber : Number[];
  title = 'app';

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
}
