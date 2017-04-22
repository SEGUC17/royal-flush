import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {VerifyService} from '../../services/verify.service';
import {ClientProfile} from '../../../../../app/models/clientProfile';

@Component({
  selector: 'app-un-varified-client-profile',
  templateUrl: './un-varified-client-profile.component.html',
  styleUrls: ['./un-varified-client-profile.component.css']
})
export class UnVarifiedClientProfileComponent implements OnInit {
		clientProfile: ClientProfile;
  constructor(private verifyService:VerifyService) { 
    this.verifyService.getClient()
        .subscribe(clientProfile => {
                this.clientProfile = clientProfile;
            });
      }

      verifyClient(){
        this.verifyService.verifyClient().subscribe(clientProfile =>{
          console.log("verified");
        });
        }
        rejectClient(client){
        var client = this.client;
        
        this.verifyService.rejectClient(client).subscribe(data => {
                      console.log("deleted");  
                      }
              );
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

