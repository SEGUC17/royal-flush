import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeedbachFormComponent } from './components/feedbach-form/feedbach-form.component';
////Abu Greedah
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { EditUserProfileService } from './services/edit-user-profile.service';
////////
import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdGridListModule, MdTabsModule, MdSliderModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { RetrieveService } from './services/retrieve.service';

import { UnverifiedService } from './services/unverified.service';
import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
// import { CompanyComponent } from './components/company/company.component';
import { SearchComponent } from './components/search/search.component';

import { UnverifiedComponent } from './components/unverified/unverified.component';
import { LocationPipe } from './pipes/location.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { PricePipe } from './pipes/price.pipe';
import { LocationEventPipe } from './pipes/location-event.pipe';
import { ClientComponent } from './components/client/client.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';

const appRoutes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'company/:username', component: CompanyComponent },
  { path: 'search', component: SearchComponent },
  { path:'client/:username', component:ClientComponent},
  { path: '', component: HomeComponent },
  { path:'clientprofile', component: ClientprofileComponent },
  { path: '**', redirectTo: '' },
  { path:'unverifiedView', component: UnverifiedComponent },
  { path:'feedback', component: FeedbachFormComponent },
  // { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    FeedbachFormComponent,
    ProfileComponent,
    // CompanyComponent,
    SearchComponent,
    LocationPipe,
    CategoryPipe,
    PricePipe,
    LocationEventPipe,
    ClientComponent,
    ClientprofileComponent,
    UnverifiedComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdGridListModule,
    MdTabsModule,
    MdSliderModule
  ],

  providers: [ValidateService, UnverifiedService, AuthService, AuthGuard, RetrieveService, SearchService, UserProfileService, EditUserProfileService, PostsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
