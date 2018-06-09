import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Login, UserService, ResponseWrapper, LoginResponse, ProfileResponse } from '../shared';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  //data member to store the ref of the 
  //subscription object
  subs:Subscription;
  //data member to store the form data
  model :Login;
  //reference of the input form
  @ViewChild("loginForm")
  loginForm:FormGroup;

  public constructor(
    private userService:UserService,
    private spinner:NgxSpinnerService,
    private alertService: AlertService,
    private router:Router)
  {
    this.model = new Login();
  }

  public ngOnInit()
  {
    
  }
public loginUser()
{
  
  if(this.loginForm.invalid)
  {
    console.log("form is invalid, marking its fields as touched.");
    for(let i in this.loginForm.controls)
      this.loginForm.controls[i].markAsTouched();
      
  }
  else
  {
    console.log("form is valid, sending it to the server...");
    console.log("Data: "+JSON.stringify(this.model));
    this.spinner.show();
    this.subs = this.userService.login(this.model)
                  .subscribe((result:ResponseWrapper<LoginResponse>)=>{
                    this.spinner.hide();
                    if(result.code == 1)
                    {
                        //fetch user profile using the received authKey
                        this.loadProfile(result.data.authKey);
                        
                    }
                    else
                        this.alertService.danger("Login failed.");

                  }); 

  }
 
}
  
  private loadProfile(authKey:String)
  {
    this.userService.load(authKey)
              .subscribe((result : ProfileResponse)=>{
                this.userService.init(result.profile);
                this.alertService.success("You are successfully logged in.");
                this.router.navigate(['profile']);
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
