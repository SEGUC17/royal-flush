import {Injectable} from '@angular/core';
import{Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class UnverifiedService{
    constructor(private http: Http){





    }
     getClientsByVerificationStatus(){
    return this.http.get('/api/clients').map (res => res.json());

  }

  verifyClients(id){
    return this.http.delete('/api/client/' +id).map(res =>res.json());
  }
  
}



