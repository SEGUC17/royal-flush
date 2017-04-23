import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  searchKey:String;
  clientSearch: boolean = true;
  ClientRes: Object[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService

  ) { }

  selectedValue: string;


  ngOnInit() {
    // console.log(this.route.snapshot.params['searchKey']);

    //  this.sub = this.route.params.subscribe(params =>  this.searchKey = params['searchKey']);
    //   this.route.params.subscribe(params =>  console.log(params['searchKey']));

    //   this.searchService.search(this.searchKey).subscribe(res => {this.ClientRes = res},
    //    err => {
    //       console.log(err);
    //       return false;
    //     });

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
  searchInit() {

  }

}