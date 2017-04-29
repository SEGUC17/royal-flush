import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class viewHotDealsService{

    constructor(private http:Http){ }

    getAlldeals(){
        return this.http.get('http://localhost:8080/viewDeals').map(res =>res.json());
    }
}