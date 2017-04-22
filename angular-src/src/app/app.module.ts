import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { UnVarifiedClientProfileComponent } from './components/un-varified-client-profile/un-varified-client-profile.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'clientprofile', component:ClientprofileComponent},
  {path:'UnVarifiedClientProfile',component:UnVarifiedClientProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientprofileComponent,
    NavbarComponent,
    HomeComponent,
    UnVarifiedClientProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
