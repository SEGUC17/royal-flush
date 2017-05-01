import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class EditUserProfileService {

  constructor(private http: Http, private router: Router) { }

  // update user profile
  editUserProfile(data: any){
      let bodyString = data;
      let headers      = new Headers({ 'Content-Type': 'application/json' });
      this.http.post('http://localhost:8080//test', bodyString, { headers: headers }).toPromise();

      this.router.navigate(['/userProfile']);
  }
}
