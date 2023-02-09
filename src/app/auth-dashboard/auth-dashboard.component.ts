import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-auth-dashboard',
  templateUrl: './auth-dashboard.component.html',
  styleUrls: ['./auth-dashboard.component.scss']
})

export class AuthDashboardComponent implements OnInit {

  productData: any;

  constructor(public router: Router, public authService: AuthServiceService, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.tablelist();
  }

  tablelist() {
    this.authService.productlist().subscribe({
      next:(res) =>{
        this.productData = res;
        console.log("product list: ", this.productData);
      },
      error:(err) =>{
        console.log("Un-Authorized Access", err);     
      }
    })
  }

}
