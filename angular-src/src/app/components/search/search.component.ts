import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchKey: any;
  searchRes: Object[];
  clientSearch: boolean = true;
  private sub: any;
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

    //   this.searchService.search(this.searchKey).subscribe(res => {this.searchRes = res},
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
  searchClients() {
    //  this.searchRes = [];
    this.searchService.searchClients(this.searchKey).subscribe(res => { this.searchRes = res },
      err => {
        console.log(err);
        return false;
      });
  }

  searchEvents() {
    //  this.searchRes = [];
    this.searchService.searchEvents(this.searchKey).subscribe(res => { this.searchRes = res },
      err => {
        console.log(err);
        return false;
      });
  }
  searchInit() {

  }

}
