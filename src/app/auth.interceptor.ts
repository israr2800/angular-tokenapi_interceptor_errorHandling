import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService: AuthServiceService, public router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenData = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })

    return next.handle(tokenData).pipe(
      catchError((error)=>{
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this.router.navigateByUrl('/auth-login');
            alert('Token not valid:- Un-Authorized ')
          }
        }
        return throwError(()=>error);
      })
    );
    
  }

}
