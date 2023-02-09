import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  fakeApi = 'http://localhost:8000';
  
  constructor(public httpClient: HttpClient, public errorService: CommonService) { }

  authlogin(email: any,  password: any) {
    
    let jsonBody = JSON.stringify({
      "email": email,
      "password": password
    })

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    }

    console.log("jsonBody: ", jsonBody);
    return this.httpClient.post(this.fakeApi + '/auth/login', jsonBody, httpOptions)

  }

  getToken() {
    console.log("local token: ", localStorage.getItem('token'));

    return localStorage.getItem('token');
  }

  productlist() {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      })
    }

    return this.httpClient.get(this.fakeApi+'/products', httpOptions)

  }

}
