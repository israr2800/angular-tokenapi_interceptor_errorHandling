import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})

export class AuthLoginComponent implements OnInit {

  addForm: FormGroup | any;
  _password: any;
  _userid: any;
  tokenResult: any;

  error: any;

  errMsg = this.errorService.errorMessage

  constructor(public fb: FormBuilder, public errorService: CommonService, public router:Router, public authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = new FormGroup({
      'userid': new FormControl(''),
      'password': new FormControl(''),
    })
  }

  submitButton() {
    console.log("form data: ", this.addForm.value);

    this.authService.authlogin(this._userid, this._password).subscribe({
      next:(res) => {
        
        this.tokenResult = res;
        console.log("loginResult: ", this.tokenResult);
        
        localStorage.setItem("token", this.tokenResult.access_token);

        console.log("token: ", this.tokenResult);
        this.router.navigate(['/auth-dashboard']);

    },
    error: (err) =>{
      let error = this.errMsg;
      alert("error: "+ error)
    }
    
    })
  }

}
