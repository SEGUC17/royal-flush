import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { RetrieveService } from '../../services/retrieve.service';
=======
>>>>>>> de7397d57657435c23218f95463359110ade42c5

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  searchKey: String;

  clientSearch: boolean = true;
  ClientRes: Object[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private searchService: SearchService,
    private retrieveService: RetrieveService

  ) { }

  selectedValue: string;


  ngOnInit() {
    this.searchKey = this.route.snapshot.params['username'];

    this.retrieveService.getClientProfile(this.searchKey).subscribe(ClientRes => {
      if (!ClientRes.success) {
        this.router.navigate(['/']);
      } else {
        this.ClientRes = ClientRes.user;
      }
    });


  }

  ngOnDestroy() {
    //  this.sub.unsubscribe();
  }
  onLinkClick($event: any) {
    console.log($event);
    this.clientSearch = !this.clientSearch;


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
  searchInit() {

  }

}
