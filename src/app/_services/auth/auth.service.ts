import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Router, CanActivate} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {baseUrl} from '../baseUrl/httpBaseUrl'

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }
  login(payload){
    const endPoint = baseUrl + '/login';
    
    return this.http.post(endPoint, payload);
  }

  sendMsg(payload){
    const endPoint = baseUrl + '/twilioForm';
    return this.http.post(endPoint, payload);
  }
  
}
