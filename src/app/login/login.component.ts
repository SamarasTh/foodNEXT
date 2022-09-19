import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if(this.loginservice.authenticate(this.username, this.password)){
      this.router.navigate(['']);
      this.invalidLogin=false;

    }else{
      this.invalidLogin = false;
    }
  }

}