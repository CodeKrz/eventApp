import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';
import {CommonService} from '../../common.service';

import {Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent {


  constructor(private newService :CommonService,) {   }
   Repdata;
   valbutton ="Save";
   thanks: any = "Thank you ";


//this returns the data from the db.
ngOnInit() {

  this.newService.GetGuest().subscribe(data =>  this.Repdata = data)
}

onSave = function(guest,isValid: boolean) {
 guest.mode= this.valbutton;
 document.getElementById("container").style.display = "none";


  this.newService.saveGuest(guest)
  .subscribe(data =>  {  (data.data);

    this.ngOnInit();
  }
  , error => this.errorMessage = error )

}
edit = function(kk) {
this.id = kk._id;
this.firstName= kk.firstName;
this.lastName= kk.lastName;
this.phoneNum= kk.phoneNum;
this.address= kk.address;
this.attending= kk.attending;
this.valbutton ="Update";
}

delete = function(id) {
this.newService.deleteGuest(id)
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )
}

}
