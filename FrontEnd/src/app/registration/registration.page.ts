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
  emailExist : boolean = false;
  phoneExist : boolean = false;
  user = new User();


  constructor(private registrationService : RegistrationService) { }

  submit(){
    this.step3=false;
     
    this.registrationService.registration(this.user).subscribe(
      data => {if(data == null){ this.error=true;}}
    );
  }

  verifyEmail():boolean{
    this.registrationService.checkEmail(this.user.email).subscribe(
      data => {
        if(data == true){
           this.emailExist = true;
        }else{
          this.emailExist = false;
        }
      }
      
    );
    return this.emailExist;    
  }

  verifyPhone():boolean {
    this.registrationService.checkPhone(this.user.phone).subscribe(
      data => {
        if(data == true ){
          this.phoneExist = true;
        }else{
          this.phoneExist = false;
        }
      }
    );
    return this.phoneExist;
  }



  card1done(){
    this.hideFirstCard=true;
    this.hideSecondCard=false;
    this.hideThirdCard=true;
    this.step1 = false;
 }
 card2done(){
   if(this.verifyEmail()==false && this.verifyPhone()==false){
    this.hideFirstCard=true;
    this.hideSecondCard=true;
    this.hideThirdCard=false;
    this.step2 = false;
   }
 }
  ngOnInit() {
    this.hideFirstCard = false;
    this.hideSecondCard = true;
  }

}
