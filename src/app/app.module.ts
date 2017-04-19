import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { IsComponent } from './is/is.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { FeedbachFormComponent } from './feedbach-form/feedbach-form.component';

const appRoutes: Routes = [{
  path: 'hamada',
  component: FeedbachFormComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    // IsComponent,
    NvbarComponent,
    FeedbachFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
