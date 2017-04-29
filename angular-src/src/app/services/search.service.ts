import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
@Injectable()
export class SearchService {
  private searchUrl: string;
  private client: Object[];
  constructor(private http: Http) { }

  searchClients(str) {
    const searchKey = {
      searchKey: str
    }
    this.searchUrl = 'http://localhost:8080/searchForClientByName';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, searchKey, {headers:headers}).map(res => res.json());
  }
  getClients() {
    const ClientRes = {
      ClientRes: str
    }
    this.searchUrl = 'http://localhost:8080/getAllClients';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, ClientRes, {headers:headers}).map(res => res.json());
  }
  getEvents() {
    const ClientRes = {
      ClientRes: str
    }
    this.searchUrl = 'http://localhost:8080/getAllEvents';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, ClientRes, {headers:headers}).map(res => res.json());
  }
  searchEvents(str) {
    const searchKey = {
      searchKey: str
    }
    this.searchUrl = 'http://localhost:8080/searchForClientEventByName';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, searchKey, {headers:headers}).map(res => res.json());
  }
  getInfo(str) {
    const searchKey = {
      searchKey: str
    }
    this.searchUrl = 'http://localhost:8080/viewClientProfile';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, searchKey, {headers:headers}).map(res => res.json());
  }
}
