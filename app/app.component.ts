import { Component } from '@angular/core';
import {UnverifiedService} from '/home/rawan/Desktop/Restful API/angular-src/src/app/services/unverified.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[UnverifiedService]
})

export class AppComponent {}