import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdGridListModule, MdTabsModule, MdSliderModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { RetrieveService } from './services/retrieve.service';

import { AuthGuard } from './guards/auth.guard';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CompanyComponent } from './components/company/company.component';
import { SearchComponent } from './components/search/search.component';
import { LocationPipe } from './pipes/location.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { PricePipe } from './pipes/price.pipe';
import { LocationEventPipe } from './pipes/location-event.pipe';
import { ClientComponent } from './components/client/client.component';

const appRoutes: Routes = [

  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'company/:username', component: CompanyComponent },
  { path: 'search', component: SearchComponent },

  { path: '', component: HomeComponent },

  { path: '**', redirectTo: '' },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CompanyComponent,
    SearchComponent,
    LocationPipe,
    CategoryPipe,
    PricePipe,
    LocationEventPipe,
    ClientComponent
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
  providers: [ValidateService, AuthService, AuthGuard, RetrieveService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
