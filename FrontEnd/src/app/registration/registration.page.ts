import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {User} from '../../models/User';
import {RegistrationService} from '../services/registration.service';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  hideFirstCard = false;
  hideSecondCard = true;
  hideThirdCard = true;
  step1 = true;
  step2 = true;
  step3 = true;
  error = false;
  emailExist : Boolean = false;
  phoneExist : boolean = false;
  password_type = "password";
  passwordc_type = "password";

  user = new User();


  constructor(private registrationService : RegistrationService) { }

  submit(){
    this.step3=false;
    if(this.emailExist || this.phoneExist){
      this.card1done();
    }else{
      this.registrationService.registration(this.user).subscribe(
        data => {if(data == null){ this.error=true; this.card1done();console.log(this.emailExist)}}
      );
    }
    
  }
  
  verifyEmailPhone(){
    this.registrationService.checkEmail(this.user.email).subscribe(
      data => {
        if(data == true){
          this.emailExist = true;
          this.card1done();
        }else if(data == false){
          this.emailExist = false;
         if(!this.phoneExist){this.card2done();}
        }
      }
    );
    this.registrationService.checkPhone(this.user.phone).subscribe(
      data => {
        if(data == true ){
          this.phoneExist = true;
          this.card1done();
        }else if(data == false){
          this.phoneExist = false;
          if(!this.emailExist){this.card2done();}
        }
      }
    );

      
  }

  // show the second card
  card1done(){
    this.hideFirstCard=true;
    this.hideSecondCard=false;
    this.hideThirdCard=true;
    this.step1 = false;
  }
  // show the third card
  card2done(){
    this.hideFirstCard=true;
    this.hideSecondCard=true;
    this.hideThirdCard=false;
    this.step2 = false;
   
  }
  ngOnInit() {
    this.hideFirstCard = false;
    this.hideSecondCard = true;
  }

}
