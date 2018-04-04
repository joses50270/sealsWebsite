import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    let token: any;
    token = localStorage.getItem('token');
    console.log('My token: ', token);
  }
  onSubmit(){
    let clearToken: any;
    clearToken = localStorage.clear();
    clearToken = '';
    console.log(clearToken);
    this.router.navigate(['home']);
  }
}
