import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

interface tokenObj{
  token : string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent implements OnInit{

  constructor(private apiService : ApiService,
    private coockieService : CookieService,
    private router : Router){};

    authForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });
      
    registerMode = false;

    ngOnInit(){
      const mrToken = this.coockieService.get('mr-Token');
      if (mrToken){
        this.router.navigate([`/movies`]);
      }
    };

  saveAuthForm(){
    if (!this.registerMode){
      this.apiService.loginUser(this.authForm.value).subscribe(
        (result: tokenObj)=> {
          this.coockieService.set('mr-Token',result.token);
          this.router.navigate([`/movies`]);
        },
        error => console.log("error:  ",error)
      )
    } else {
      this.apiService.registerUser(this.authForm.value).subscribe(
        result => console.log(this.registerMode),
        error => console.log("error:  ",error)
      )
    }
    
  };
};
