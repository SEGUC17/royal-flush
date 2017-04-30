import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt'; //Sprint1

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
// <<<<<<< HEAD

  authToken: any;
  user: any;
  clientprof: any;

  constructor(private http: Http) {

  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  isBusiness() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.usertype;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
// =======
  // authToken: any;

  // constructor(private http:Http) { }

  createClientProf(clientprof){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('localhost:8080/saveClientProfile', clientprof,{headers: headers})
      .map(res => res.json());
  }
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
}
