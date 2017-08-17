import { Injectable } from '@angular/core';

import { Number } from './data';
import { NUMBERS } from './data';

@Injectable()
export class NumService {
  getNumbers(): Number[] {
    return NUMBERS;
  }
}
