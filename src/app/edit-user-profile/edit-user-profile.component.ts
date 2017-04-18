import { Component, OnInit } from '@angular/core';
import { EditUserProfileService } from '../edit-user-profile.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  constructor(private editUserProfileService:EditUserProfileService) { }
  // console.log(editForm);
  ngOnInit() {
  }

  editUserProfile(editForm: NgForm){
    let name = editForm.value.name;
    let email = editForm.value.email;
    let address = editForm.value.address;
    let data = {"name":name, "email":email, "address":address};
    this.editUserProfileService.editUserProfile(data);
  }

}
