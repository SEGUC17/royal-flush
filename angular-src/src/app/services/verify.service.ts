import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VerifyService{
    constructor(private http:Http){
        console.log('Verify Service Initialized...');
    }
    
    getClient(){
        return this.http.get('localhost:8080/viewClientProfile')
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
    verifyClient(client){
        //return this.http.post('localhost:8080/verifyClient')
            //.map(res => res.json());
        let bodyString = client;
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('localhost:8080/verifyClient', client, { headers: headers }).map(res => res.json());//.toPromise();
    }
    rejectClient(client){
        let bodyString = client;
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        this.http.post('localhost:8080/rejectClient', client, { headers: headers }).map(res => res.json());//.toPromise();
        
    }
  //     createClientProf(clientprof){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('localhost:8080/saveClientProfile', clientprof,{headers: headers})
  //     .map(res => res.json());
  // }

     
}
    // updateStatus(task){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
    //         .map(res => res.json());
    // }
