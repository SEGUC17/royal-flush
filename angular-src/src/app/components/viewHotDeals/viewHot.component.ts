import { Component, OnInit } from '@angular/core';
import { viewHotDealsService } from '../../services/viewHotDeals.service'

@Component({
    selector: 'app-viewHot',
    templateUrl:'./viewHot.component.html'
    // styleUrls:['./viewHot.component.css']
})

export class viewHotDealsComponent implements OnInit{
    deals: any=[];
    constructor(private viewDealsServices: viewHotDealsService){ }

    ngOnInit(){
        this.viewDealsServices.getAlldeals().subscribe(deals=>{
            this.deals=deals;
        })
    }
}
