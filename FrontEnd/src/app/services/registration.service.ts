import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiUrl = "http://localhost:8080/auth/registration";
  constructor(private http: HttpClient) { }

  // user registration
  registration(user : User) : Observable<User>{  
    return this.http.post<User>(this.apiUrl,user,httpOptions);
  }

  
}
