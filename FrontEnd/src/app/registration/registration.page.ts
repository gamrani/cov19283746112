import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  password = new FormControl('');
  sexe = new FormControl('');

  submit(){
    console.log(this.firstName.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
