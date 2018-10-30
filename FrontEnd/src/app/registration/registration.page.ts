import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {User} from '../../models/User';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  hideFirstCard = false;
  hideSecondCard = true;

  user = new User();

  submit(){
    console.log(this.user);
  }
  constructor() { }
  continuer(){
    this.hideFirstCard=true;
    this.hideSecondCard=false;
 }
  ngOnInit() {
    this.hideFirstCard = false;
    this.hideSecondCard = true;
  }

}
