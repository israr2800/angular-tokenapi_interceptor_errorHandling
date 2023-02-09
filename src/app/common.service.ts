import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  errorMessage = {
    invalid: 'User/pass invalid'
  }

  constructor() { }
  
  // handleError() {
  //   return throwError(()=> new Error('invalid'));
  // }

  handleError(err: HttpErrorResponse) {
    return throwError(()=> new Error('invalid'));
  }
  
}
