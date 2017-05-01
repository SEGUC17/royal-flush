import { Component, OnInit } from '@angular/core';
import { CreateClientEventService } from '../../services/create-client-event.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-client-event',
  templateUrl: './create-client-event.component.html',
  styleUrls: ['./create-client-event.component.css']
})
export class CreateClientEventComponent implements OnInit {

  constructor(private createClientEventService: CreateClientEventService) { }

  ngOnInit() {

  }
  createClientEvent(createClientForm: NgForm){
    let eventName = createClientForm.value.eventName;
    let startingDate = createClientForm.value.startingDate;
    let endingDate = createClientForm.value.endingDate;
    let price = createClientForm.value.price;
    let data = {"eventName":eventName, "startingDate":startingDate, "endingDate":endingDate, "price":price};
    this.createClientEventService.createClientEvent(data);
  }

}
