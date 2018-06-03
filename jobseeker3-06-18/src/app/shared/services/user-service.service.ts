import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Register,SimpleResponse, Login, ResponseWrapper, LoginResponse } from '../models';


@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

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
