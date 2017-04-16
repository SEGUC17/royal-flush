import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile.service';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
