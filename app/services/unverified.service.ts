import {Injectable} from '@angular/core';
import{Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class UnverifiedService{
    constructor(private http: Http){





    }
     getClientsByVerificationStatus(){
    return this.http.get('http://localhost:8080/api/clients').map (res => res.json());

  }
  
}



