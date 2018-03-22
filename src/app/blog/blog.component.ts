import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { baseUrl } from '../_services/baseUrl/httpBaseUrl';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public comments: any = [];

  first: String;
  last: String;
  message: any;
  contactObj: any;
  messages: any;

  constructor(private router: Router, public user: HttpClient, private authService: AuthService) { 
   }

  ngOnInit() {
    this.user.get(baseUrl + '/pullComments')
    .subscribe(response => this.comments = response);
  }
  onSubmit() {
    this.contactObj = {
      firstname: this.first,
      lastname : this.last,
      msg: this.message
    }
    console.log(this.contactObj);
    this.authService.sendComment(this.contactObj).subscribe((data)=>{
      this.first = "";
      this.last = "";
      this.message = "";
      alert('Message has been sent')
    });
 }
}
