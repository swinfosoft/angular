import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ToDo } from './todo';
@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  //method to fetch all the employees

  public loadAll():Observable<ToDo[]>
  {
      console.log("loadAllEmp() method of the serive is invoked.")
      let url=environment.service_url+"todos";
      //invoking the get() method of the httpClient
     return this.http.get<ToDo[]>(url);
  }
}
