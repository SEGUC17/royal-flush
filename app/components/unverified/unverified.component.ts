import { Component, OnInit } from '@angular/core';
import{UnverifiedService} from '/home/rawan/Desktop/Restful API/angular-src/src/app/services/unverified.service';
import{Clients} from'/home/rawan/Desktop/Restful API/angular-src/src/app/Clients';

@Component({
  moduleId: module.id,
  selector: 'app-unverified',
  templateUrl: 'unverified.component.html',
  styleUrls: ['unverified.component.css']
})
export class UnverifiedComponent implements OnInit {
  //type Clients is creater in file Client.ts
  clients: Clients[];
  name: string;

  constructor(private UnverifiedService: UnverifiedService) { 
    this.UnverifiedService.getClientsByVerificationStatus().subscribe( clients =>{
      this.clients = clients;

    });
    

  }
  verifyClients(id){
    var clients= this.clients;
    this.UnverifiedService.verifyClients(id).subscribe(data => {
      if(data.n == 1){
        for(var i =0; i<clients.length; i++){
          if(clients[i]._id == id)
          {
            clients.splice(i,1);

          }
        }
      }
    });
  }

  

  ngOnInit() {
  }

}
