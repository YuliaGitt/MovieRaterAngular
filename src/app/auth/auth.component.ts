import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service/public-api';

interface tokenObj{
  token : string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {

  constructor(private apiservice : ApiService,
    private coockieService : CookieService){}

  loginForm = new FormGroup({
    username : new FormControl(""),
    password : new FormControl("")
  })

  saveLoginForm(){
    this.apiservice.loginUser(this.loginForm.value).subscribe(
      (result: tokenObj) => {
        this.coockieService.set("mr-token",result.token)
      },
      error => console.log(error)
      );
   }
  }

