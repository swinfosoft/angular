import { Component, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from './user-service.service';
import { Subscription } from 'rxjs/Subscription';
import { ToDo } from './todo';
import { NgxSpinnerService } from 'ngx-spinner';
import { Register } from './register';
import { FormGroup } from '@angular/forms';
import { SimpleResponse } from './simpleresponse';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  
  //data member to store the ref of the 
  //subscription object
  subs:Subscription;
  //data member to store the form data
  model :Register;
  //reference of the input form
  @ViewChild("registerForm")
  regForm:FormGroup;

  public constructor(
    private userService:UserService,
    private spinner:NgxSpinnerService,
    private alertService: AlertService)
  {
    this.model = new Register();
  }

public registerUser()
{
  
  if(this.regForm.invalid)
  {
    console.log("form is invalid, marking its fields as touched.");
    for(let i in this.regForm.controls)
      this.regForm.controls[i].markAsTouched();
      
  }
  else
  {
    console.log("form is valid, sending it to the server...");
    this.spinner.show();
    this.subs = this.userService.register(this.model)
                  .subscribe((result:SimpleResponse)=>{
                    this.spinner.hide();
                    if(result.code == 1)
                        this.alertService.success("Successfully registered.");
                    else
                        this.alertService.danger("Registration failed.");

                  });

  }
 
}
  
  public ngOnDestroy()
  {
    if(this.subs !=null)
    {
        this.subs.unsubscribe();
    }
  }
}
