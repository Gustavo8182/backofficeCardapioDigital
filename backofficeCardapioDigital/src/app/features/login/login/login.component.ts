import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;

  constructor(
    private loginService:LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validateUser(loginForm: NgForm) {
    const data = loginForm.value;
    const result = this.loginService.getByEmail(data.email, data.password);

    if(result.email == data.email && result.password == data.password){
      sessionStorage.setItem('user', JSON.stringify(result));
      return this.router.navigateByUrl('home');
    } else{

      return this.error = true;
    }};

}
