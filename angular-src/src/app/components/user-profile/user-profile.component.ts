import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 user: any = [];
 subscriptions: any = [];
 reservations: any = [];

 constructor(private userProfileService: UserProfileService) { }


  ngOnInit() {
    // Retrieve user from the API
   this.userProfileService.getUser().subscribe(user => {
     this.user = user;
   });

   this.userProfileService.getSubscribedClients().subscribe(subscriptions => {
     this.subscriptions = subscriptions;
   });

   this.userProfileService.getReservations().subscribe(reservations => {
     this.reservations = reservations;
   });


  }

}
