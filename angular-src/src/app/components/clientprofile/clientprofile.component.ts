import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {
  clientName: String;
  clientDescription: String;
  clientInfo:String;
  paymentInfo:String;
  category:String;
  email:String;
  fullname:String;
  contactNo:String;

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private http:Http){ }

  ngOnInit() {
  }

  saveClientProfile(){
    const clientprof = {
      clientName: this.clientName,
      clientDescription: this.clientDescription,
      clientInfo: this.clientInfo,
      paymentInfo: this.paymentInfo,
      category: this.category,
      email: this.email,
      fullname: this.fullname,
      contactNo: this.contactNo
    }

    var headers = new Headers();
    // console.log('name' + clientprof.clientName + ' -- email' + clientprof.email + ' -- category' + clientprof.category + ' -- fullname' + clientprof.fullname + ' -- no' + clientprof.contactNo + ' -- description' + clientprof.clientDescription + ' -- info' + clientprof.clientInfo + ' -- payment' + clientprof.paymentInfo );

    //Required fields
    if(!this.validateService.validateClientProfile(clientprof)){
      this.flashMessage.show("Please fill in all feilds", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Validate Email
    if(!this.validateService.validateEmail(clientprof.email)){
      this.flashMessage.show("Please enter a valid email", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Create Client Profile
    this.http.post('http://localhost:8080/saveClientProfile', clientprof, {headers:headers})
    .subscribe(err => console.log(err));
    // console.log("fff" + err);
    this.flashMessage.show("Profile created successfully!", {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/home']);
    // this.authService.createClientProf(clientprof).subscribe(data => {
    //   if(data.success){
    //     this.flashMessage.show("Profile created successfully!", {cssClass: 'alert-success', timeout: 3000});
    //     this.router.navigate(['/home']);
    //   }else{
    //     this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout: 3000});
    //     this.router.navigate(['/home']);
    //   }
    // });
  }

}
