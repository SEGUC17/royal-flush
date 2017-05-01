import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 user: any = [];
 subscriptions: any = [];
 reservations: any = [];

 userAuth: Object;

 constructor(private userProfileService: UserProfileService,
             private authService: AuthService) { }


  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {this.userAuth = profile.user},
                                            err => {console.log(err); return err;});
                                          console.log(this.userAuth);
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
