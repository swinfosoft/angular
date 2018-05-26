import { Component} from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-subtractor',
  templateUrl: './subtractor.component.html',
  styleUrls: ['./subtractor.component.css']
})
export class SubtractorComponent {

  // data members to receive form data
 num1="0";
 num2="0";
 //data member to store the result
 diff:number=0;
//data member to control the display of result
flag:boolean=true;
  
  constructor(private calculator:CalculatorService)
   {}

  //method to process click event of Add button 
 public subtract() {
   this.diff=this.calculator.subtract(this.num1,this.num2);
   this.flag=false;
  }

}
