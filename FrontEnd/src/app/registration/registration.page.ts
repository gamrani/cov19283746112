import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  hideFirstCard = false;
  hideSecondCard = true;
  

  submit(){
  }
  constructor() { }
  continuer(){
    this.hideFirstCard=true;
    this.hideSecondCard=false;
 }
  ngOnInit() {
  }

}
