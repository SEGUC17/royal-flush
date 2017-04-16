import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserProfileService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getUser() {
    return this.http.get('/api/getUser')
      .map(res => res.json());
  }

  getSubscribedClients(){
    return this.http.get('/api/getSubscribedClients')
      .map(res => res.json());
  }

  getReservations(){
    return this.http.get('/api/getReservations')
      .map(res => res.json());
  }

}
