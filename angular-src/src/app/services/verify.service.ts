import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VerifyService{
    constructor(private http:Http){
        console.log('Verify Service Initialized...');
    }
    
    getClient(){
        return this.http.get('/api/viewClientProfile')
            .map(res => res.json());
    }
    
    
    // addTask(newTask){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
    //         .map(res => res.json());
    // }
    
    // verifyClient(client){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/task/'+client.email, JSON.stringify(client), {headers: headers})
    //         .map(res => res.json());
    // }
    verifyClient(){
        return this.http.post('/api/verifyClient')
            .map(res => res.json());
    }
    rejectClient(client:any){
        let bodyString = client;
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('/api/rejectClient', bodyString, { headers: headers }).toPromise();
        r
    }

     
}
    // updateStatus(task){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
    //         .map(res => res.json());
    // }
