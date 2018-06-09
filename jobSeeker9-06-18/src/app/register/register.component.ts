import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService,Register,SimpleResponse } from '../shared';
import { Subscription } from 'rxjs/Subscription';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
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
    private alertService: AlertService,
    private router:Router)
  {
    this.model = new Register();
  }

  public ngOnInit()
  {
    
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
                    {
                        this.alertService.success("Successfully registered.");
                        this.router.navigate(['login']);
                    }
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
