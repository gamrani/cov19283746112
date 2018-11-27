import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AuthenticationService} from '../services/auth.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor(private authService:AuthenticationService,public navCtrl: NavController) { 
    //this.navCtrl.goBack();
  }

  ngOnInit() {
  }
  token:string ;

  socialSignIn(platform:string){
      this.authService.socialSignIn(platform);
      this.navCtrl.goBack();
      console.log(this.authService.getEmailFromStorage());
  }

}
