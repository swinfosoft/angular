import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ToDo } from './todo';
import { Register } from './register';
import { SimpleResponse } from './simpleresponse';
@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  //method to fetch all the employees

  public register(data:Register):Observable<SimpleResponse>
  {
      let url=environment.service_url+"register";
      return this.http.post<SimpleResponse>(url,data);
  }
}
