ClientResimport { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  searchKey:String;
  username:String;
  userRes: Object[];
  clientSearch: boolean = true;
  ClientRes: Object[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService

  ) { }

  selectedValue: string;


  ngOnInit() {
    this.searchKey = this.route.snapshot.params['username'];

      this.retrieveService.getClientProfile(this.searchKey).subscribe(ClientRes => {
        if (!searchKey.success) {
          this.router.navigate(['/']);
        }else{
          this.ClientRes = searchKey.user;
       });
  }

  ngOnDestroy() {
    //  this.sub.unsubscribe();
  }
  onLinkClick($event: any) {
    console.log($event);
    this.clientSearch=!this.clientSearch;

  }
  getClients() {
    //  this.ClientRes = [];
    this.searchService.getClients().subscribe(res => { this.ClientRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  getEvents() {
    //  this.ClientRes = [];
    this.searchService.getEvents().subscribe(res => { this.ClientRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  getInfo(searchKey) {
    //  this.searchRes = [];
    this.searchService.getInfo(this.searchKey).subscribe(res => { this.ClientRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  getReservations(username) {
    //  this.ClientRes = [];
    this.searchService.getReservations(this.username).subscribe(res => { this.userRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  searchInit() {

  }

}
