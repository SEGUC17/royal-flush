import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { SendFeedbackService } from '../send-feedback.service';
// import {FlashMessagesService} from 'angular2-flash-messages';
// import {Router} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-feedbach-form',
  templateUrl: './feedbach-form.component.html',
  styleUrls: ['./feedbach-form.component.css'],
  // providers:[SendFeedbackService],
})
export class FeedbachFormComponent {
  // @Input() text = '';
  // @Output() textChange = new EventEmitter<String>();

  feedbackText = '';

  updateText(event) {
    this.feedbackText = event.target.value;
    // this.text = newText;
    // this.onClicked(this.text);
  }

  feed: String = '';
  // private SendFeedbackService : SendFeedbackService;
  constructor(private http: Http) { }
  onClicked(value) {
    // this.http.post('http://localhost:8080/addNewFeedback/:client_id', JSON.stringify(this.feed), {headers:headers})
    //   .subscribe(err => console.log(err));
    // new SendFeedbackService(http:"http://localhost:8080")
    // }

    // var headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');

    const body = {
      body: this.feedbackText,
      client_id: "123",
      user_id: "123"
    };

    this.http.post('http://localhost:8080/addNewFeedback', body)
      .subscribe(data => console.log(data));

    // console.log(typeof this.http.post('http://localhost:8080/addNewFeedback', this.feed))
  }
}
