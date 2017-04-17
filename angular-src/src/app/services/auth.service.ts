import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  clientprof: any;

  constructor(private http:Http) { }

  createClientProf(clientprof){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('localhost:8080/saveClientProfile', clientprof,{headers: headers})
      .map(res => res.json());
  }
}
