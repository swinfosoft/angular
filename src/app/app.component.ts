import { Component } from '@angular/core';
import {Data} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //variable to store the sum of numbers
  sum:number=0;
  //Object to store form values
  data:Data;

  //variable to control the display of sum in html
  flag:boolean=true;


  public constructor()
  {
    this.data=new Data();
  }
  
  //method to calculate the sum
  public add()
  {
    this.flag=false;
    console.log("Adding "+this.data.num1+", "
    +this.data.num2);
    this.sum=parseInt(this.data.num1)
                +parseInt(this.data.num2);
  }
}
