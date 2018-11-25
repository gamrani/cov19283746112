import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatSelectModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CitiesService} from './services/cities.service';
import {TripService} from './services/trip.service';
import {AuthenticationService} from './services/auth.service';
import {RegistrationService} from './services/registration.service';
import { TypeaheadModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import {DatePipe} from '@angular/common';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

import { IonicStorageModule } from '@ionic/storage';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("327837800995292")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("962009414646-75ip02db9djg08fshebmbm6egrflgu0a.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [SocialLoginModule,BrowserModule,HttpModule, IonicStorageModule.forRoot(),IonicModule.forRoot(),TypeaheadModule.forRoot(), AppRoutingModule,FormsModule,MatSelectModule,HttpClientModule,BrowserAnimationsModule,MatButtonModule,MatAutocompleteModule, MatCheckboxModule],
  providers: [
    StatusBar,CitiesService,TripService,RegistrationService,AuthenticationService,
    SplashScreen,DatePipe,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
