import { Injectable } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { NavController } from '@ionic/angular';
import {RegistrationService} from './registration.service';

import { Storage } from '@ionic/storage';
import { User } from '../../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:User = new User();
  userExists:boolean;
  constructor(private userService:RegistrationService,private storage: Storage,private socialAuthService: AuthService) { }
 
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if(userData){
            let user:User = new User();
            user.token = userData.token;
            user.name = userData.name;
            user.email = userData.email;
            this.setTokenToLoggedUserDb(userData.token,user);
            this.storage.set('token',userData.token);
            this.storage.set('email',userData.email);
        }
      
      }
    );
  }
 
  setTokenToLoggedUserDb(token:string,user:User){
    this.userService.updateUserToken(token,user).subscribe(
      data =>{
        console.log("setTokenToLoggedUserDb(token:string,email:string) :",data);
      }
    );
  }
  userIsLoged():User{
    let token:string =" ";
    let email:string = " ";
    this.getEmailFromStorage();
    return this.user;
  }
  userLoggedIn(x:any){
    //this.token = x;
    this.userService.getUserByEmail(x).subscribe(
      data =>{
        this.user = data;
        
        console.log(this.getCurrentUser());
      }
    ) 
  }
  getCurrentUser():User{
    return this.user;
  }
  getEmailFromStorage(){
     this.storage.get('email').then((val) => {
       this.userLoggedIn(val);
     });
  }
}
