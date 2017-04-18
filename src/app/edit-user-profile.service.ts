import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';

// const axios = require('axios');

@Injectable()
export class EditUserProfileService {

  constructor(private http: Http, private router: Router) { }

  // update user profile
  editUserProfile(data: any){
      let bodyString = data;
      let headers      = new Headers({ 'Content-Type': 'application/json' });
       this.http.post('/api/editUserProfile', bodyString, { headers: headers }).toPromise();
       this.router.navigate(['/userProfile']);
  }
}
