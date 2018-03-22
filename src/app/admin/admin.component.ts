import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../_services/auth/auth.service'
import {Router, RouterModule} from '@angular/router';

var localStorage = window.localStorage

class Credentials {
  email: string;
  password: string;
}

interface ServerResponse{
  type: boolean;
  data: any;
  token: any;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public credentials: Credentials;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  onSubmit() {
    this.auth.login(this.credentials)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (res.type === true) {
          localStorage.setItem('authorization', res.token);
          this.credentials.email = "";
          this.credentials.password = "";
          this.router.navigateByUrl('home');
          console.log(res.data)
        } else if (this.credentials.email != 'jose.santana.simontech@gmail.com') {
          alert('Wrong email!');
        } else if (this.credentials.password != 'santanaBanana') {
          alert('Wrong password!');
        }
      }, (err) => {
        console.log(err);
        console.log(this.credentials);
      });
  }
}