import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from '../../models/User';
import { Observable } from 'rxjs';
import {Config} from '../../server.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  config = new Config();
  apiUrl = this.config.uriLocal+"/users";
  constructor(private http: HttpClient) { }

  // user registration
  registration(user : User) : Observable<User>{  
    return this.http.post<User>(this.apiUrl+"/registration",user,httpOptions);
  }

  // check email and phone existance
  checkEmail(email:string) : Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl+"/email/"+email);
  }
  checkPhone(phone:number) : Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl+"/phone/"+phone);
  }

  userIsAuthenticated():Observable<Boolean>{
    return this.http.get<Boolean>(this.apiUrl+"/userIsAuthenticated");
   }
   
   getUserByEmail(email:String):Observable<User>{
      return this.http.get<User>(this.apiUrl+"/userByEmail/"+email);
   }
   getUserByTokenAndEmail(email:string,token:string):Observable<User>{
     return this.http.get<User>(this.apiUrl+"/user/"+email+"/"+token);
   }
   updateUserToken(token:string,user:User){
     return this.http.post(this.apiUrl+"/newToken/"+token,user,httpOptions);
   }
   
}
