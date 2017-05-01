import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserProfileService {

  constructor(private http: Http) { }

  getUser() {
    return this.http.get('http://localhost:8080/getUser')
      .map(res => res.json());
  }

  getSubscribedClients(){
    return this.http.get('http://localhost:8080/subscriptions')
      .map(res => res.json());
  }

  getReservations(){
    return this.http.get('http://localhost:8080/reservations')
      .map(res => res.json());
  }

  // Get all posts from the API
  // getUser() {
  //   return this.http.get('/api/getUser')
  //     .map(res => res.json());
  // }
  //
  // getSubscribedClients(){
  //   return this.http.get('/api/getSubscribedClients')
  //     .map(res => res.json());
  // }
  //
  // getReservations(){
  //   return this.http.get('/api/getReservations')
  //     .map(res => res.json());
  // }

}
