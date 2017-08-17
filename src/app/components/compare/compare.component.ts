import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NumService } from '../../services/app.service';
import { Number } from '../../services/data';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
@Input() datasend:  object;
samplenumber : Number[];
searchStr: string;
  constructor(private numService: NumService) {

    }
getNumbers(): void {
    this.samplenumber = this.numService.getNumbers();
  };
  ngOnInit() {
  }

}
