import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  public  add(x:string, y:string):number
  {
    return parseInt(x)+parseInt(y);
  }

  public  subtract(x:string, y:string):number
  {
    return parseInt(x)-parseInt(y);
  }
}
