import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private storage: Storage,public navCtrl: NavController,private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  retour(){
    this.navCtrl.goBack();
  }
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
          console.log('user data : ',userData);
          this.storage.set('token',userData.token);
          this.storage.get('token').then((val) => {
           if(val!=null) {
             console.log('Token is : ', val);
             
            }
          });          
          //this.navCtrl.goBack();
      }
      
      }
    );
  }
}
