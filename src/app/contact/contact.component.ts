import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

 

// class ContactForm{
//   firstName = first;
//   lastName = last;
//   email = this.email;
//   msg = this.message;
// }

export class ContactComponent implements OnInit {

  email: String;
  first: String;
  last: String;
  message: any;
  contactObj: any;
  messages: any;

  

  constructor(private router: Router, public user: HttpClient, private authService: AuthService) { }


  ngOnInit() {

  }
  onSubmit() {
   this.contactObj = {
     firstname: this.first,
     lastname : this.last,
     email: this.email,
     msg: this.message
   }
   this.authService.sendMsg(this.contactObj).subscribe(message => console.log(message));




}
}
