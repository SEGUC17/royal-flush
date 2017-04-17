import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
@Injectable()
export class SearchService {
  private searchUrl: string;
  constructor(private http: Http) { }
  
  search(str) {
    const searchKey = {
      searchKey: str
    }
    this.searchUrl = 'http://localhost:8080/searchForClientByName';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.searchUrl, searchKey, {headers:headers}).map(res => res.json());
  }
}
