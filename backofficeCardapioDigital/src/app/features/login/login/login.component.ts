import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginServiceService } from '../services/loginService.service';

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
    const user = this.loginService.getByEmail(data.email, data.password);
    if(!user) {
      return this.error = true;
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    return this.router.navigateByUrl('home');

  }

}
