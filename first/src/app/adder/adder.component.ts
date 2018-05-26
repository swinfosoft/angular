import { Component} from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent {
// data members to receive form data
 num1="0";
 num2="0";
 //data member to store the result
 sum:number=0;
 //data member to control the display of result
 flag:boolean=true;
  
  constructor(private calculator:CalculatorService)
   {}

  //method to process click event of Add button 
 public add() {
   this.sum=this.calculator.add(this.num1,this.num2);
   this.flag=false;
  }

}
