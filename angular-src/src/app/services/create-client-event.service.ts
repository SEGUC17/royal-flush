import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CreateClientEventService {

  constructor(private http: Http) { }

  createClientEvent(data: any){
    let bodyString = data;
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('/api/createClientEvent', bodyString, { headers: headers }).toPromise();


  }
}
