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
  apiUrl = "http://localhost:8080/users/sign-up";
  constructor(private http: HttpClient) { }

  // user registration
  registration(user : User) : Observable<User>{  
    return this.http.post<User>(this.apiUrl,user,httpOptions);
  }

  // check email and phone existance
  checkEmail(email:string) : Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl+"/email/"+email);
  }
  checkPhone(phone:number) : Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl+"/phone/"+phone);
  }

  
}
