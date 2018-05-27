import { Component, OnDestroy } from '@angular/core';
import { UserService } from './user-service.service';
import { Subscription } from 'rxjs/Subscription';
import { ToDo } from './todo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  
  //data member to store the ref of the 
  //subscription object
  subs:Subscription;
  //data member to store the received data
  tasks:ToDo[];

  public constructor(
    private userService:UserService,
    private spinner:NgxSpinnerService)
  {
    this.tasks=new Array();
  }


  public loadTasks()
  {
    console.log("loading all tasks...");
    this.spinner.show();
    this.subs= this.userService.loadAll()
            .subscribe((result)=>{
                this.tasks=result;
                this.spinner.hide();
            });
  }
  public ngOnDestroy()
  {
    if(this.subs !=null)
    {
        this.subs.unsubscribe();
    }
  }
}
