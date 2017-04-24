ClientResimport { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  client_name:String;
  reservations: Object[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService

  ) { }




  ngOnInit() {
    this.username = this.route.snapshot.params['username'];

    this.retrieveService.getUsername(this.username).subscribe(userRes => {
      if (!username.success) {
        this.router.navigate(['/']);
      }else{
        this.userRes = username.user;
      }
    });
  }

  ngOnDestroy() {
    //  this.sub.unsubscribe();
  }
  onLinkClick($event: any) {
    console.log($event);
    this.clientSearch=!this.clientSearch;
}
  getReservations(username) {
    //  this.ClientRes = [];
    this.searchService.getReservations(this.username).subscribe(res => { this.userRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  getClientReservation(client_name) {
    //  this.searchRes = [];
    this.searchService.getClientReservation(this.client_name).subscribe(res => { this.reservations = res },
      err => {
        console.log(err);
        return false;
      });
  }

  searchInit() {

  }

}
