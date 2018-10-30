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
  hideThirdCard = true;
  step1 = true;
  step2 = true;
  step3 = true;

  user = new User();

  submit(){
    this.step3=false;
  }
  constructor() { }
  card1done(){
    this.hideFirstCard=true;
    this.hideSecondCard=false;
    this.hideThirdCard=true;
    this.step1 = false;
 }
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
