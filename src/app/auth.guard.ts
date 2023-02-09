import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router, public authService: AuthServiceService) {}

  canActivate() {
      if(this.authService.getToken()) {       
        return true;
      }
      else {
        alert("Un-Authorized Access from auth guard");
        this.router.navigate(['/auth-login']);
        return false 
      }

  }
  
}
