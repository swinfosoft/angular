import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Register,SimpleResponse, Login, ResponseWrapper, LoginResponse, Profile, ProfileResponse } from '../models';
import {SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class UserService {

    //object to store user profile
    profile:Profile;
   

  constructor(
      private http:HttpClient,
      private storage:SessionStorageService)
    { 
        if(this.storage.isStorageAvailable())
            this.profile=this.storage.retrieve("user");
        else
            this.profile=new Profile();
    }


//method to initialize user profile
public  init(profile: Profile)
{
  //profile reference is stored in the data members
  this.profile= profile;
  //proifle object is stored in the session storage
  this.storage.store("user",profile);
}

//method to logout the current user
public logout()
{
 this.profile=null;
 this.storage.clear("user");

}


//method to load user profile from the server

public load(authKey:String):Observable<ProfileResponse>
{
    let url=environment.service_url+"user/profile?_id="+authKey;
    return this.http.get<ProfileResponse>(url);
}


  //method to register a user

  public register(data:Register):Observable<SimpleResponse>
  {
      let url=environment.service_url+"register";
      return this.http.post<SimpleResponse>(url,data);
  }
  //method to login a user

  public login(data:Login):Observable<ResponseWrapper<LoginResponse>>
  {
      let url=environment.service_url+"login";
      return this.http.post<ResponseWrapper<LoginResponse>>(url,data);
  }
}
