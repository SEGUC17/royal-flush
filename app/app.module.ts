import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnverifiedComponent } from '/home/rawan/Desktop/Restful API/angular-src/src/app/components/unverified/unverified.component';

const appRoutes: Routes = [
{path: 'unverified', component: UnverifiedComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnverifiedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
