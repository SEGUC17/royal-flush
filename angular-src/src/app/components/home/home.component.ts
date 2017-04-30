import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  businesses: any;
  constructor(
    private retrieveService: RetrieveService
  ) { }


  ngOnInit() {




  }

}
