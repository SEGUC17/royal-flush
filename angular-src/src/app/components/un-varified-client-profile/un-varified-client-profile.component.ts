import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {VerifyService} from '../../services/verify.service';
import {Router} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {ClientProfile} from '../../../../../app/models/clientProfile'; //el line dah el kan metala3 error

@Component({
  selector: 'app-un-varified-client-profile',
  templateUrl: './un-varified-client-profile.component.html',
  styleUrls: ['./un-varified-client-profile.component.css']
})
export class UnVarifiedClientProfileComponent implements OnInit {
		 clientName: String;
     clientDescription: String;
     clientInfo:String;
     paymentInfo:String;
     category:String;
     email:String;
     fullname:String;
     contactNo:String;
     constructor(private verifyService:VerifyService,
      private flashMessage: FlashMessagesService,
      private router: Router,
      private http:Http) { 

      // this.verifyService.getClient()
      //   .subscribe(clientProfile => {
      //           this.clientProfile = clientProfile;
      //       });
      }

      verifyClient(){
      const clientprof = {
      clientName: this.clientName,
      clientDescription: this.clientDescription,
      clientInfo: this.clientInfo,
      paymentInfo: this.paymentInfo,
      category: this.category,
      email: this.email,
      fullname: this.fullname,
      contactNo: this.contactNo
    }
        var headers = new Headers();
        // this.verifyService.verifyClient(clientprof).subscribe(data =>{
        //   console.log("verified");
        // });
        this.http.post('http://localhost:8080/verifyClient', JSON.stringify(clientprof), {headers:headers})
        .subscribe(err => console.log(err));
        }
        rejectClient(){
        
        const clientprof = {
      clientName: this.clientName,
      clientDescription: this.clientDescription,
      clientInfo: this.clientInfo,
      paymentInfo: this.paymentInfo,
      category: this.category,
      email: this.email,
      fullname: this.fullname,
      contactNo: this.contactNo
    }
        var headers = new Headers();
        // this.verifyService.verifyClient(clientprof).subscribe(data =>{
        //   console.log("verified");
        // });
        this.http.post('http://localhost:8080/rejectClient', JSON.stringify(clientprof), {headers:headers})
        .subscribe(err => console.log(err));
        // this.verifyService.rejectClient(Client).subscribe(data => {
        //               console.log("deleted");  
        //               }
        //       );
    }

    //   updateStatus(clientProfile){
    //     var _clientProfile = {
    //         _clientName:clientName
    //         _email:email
    //         _category:category
    //         _fullname:fullname
    //         _contactNo:contactNo
    //         _clientDescription:clientDescription
    //         _clientInfo:clientInfo
    //         _paymentInfo:paymentInfo
    //     };
        
    //     this.Service.updateStatus(_clientProfile).subscribe(data => {
    //         clientVerification==true;
    //     });
    // }

  			
   ngOnInit() {
   }

}

