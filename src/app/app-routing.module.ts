import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'authentification', loadChildren: './authentification/authentification.module#AuthentificationPageModule' },  { path: 'proposer', loadChildren: './proposer/proposer.module#ProposerPageModule' },
  { path: 'annonces', loadChildren: './annonces/annonces.module#AnnoncesPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
