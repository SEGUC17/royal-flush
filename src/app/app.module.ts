import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile.service';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { EditUserProfileService } from './edit-user-profile.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'userProfile',
    pathMatch: 'full'
  },
  {
    path: 'userProfile',
    component: UserProfileComponent
  },
   {
     path: 'editUserProfile',
     pathMatch: 'full',
     component: EditUserProfileComponent
   },

];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    UserProfileService,
    EditUserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
