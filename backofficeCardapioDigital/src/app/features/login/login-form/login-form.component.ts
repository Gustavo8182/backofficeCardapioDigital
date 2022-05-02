import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginServiceService } from '../service/login-service.service';
import { User } from 'src/app/shared/model/user.model';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user:User = this.loginService.getDefaultUser();

  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) { }


  ngOnInit(): void {
  }

  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  onSubmit() {
    const formValue = this.userForm.value;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.loginService.createUser(this.user);
    alert('Usuario adicionado com sucesso!');
    this.router.navigateByUrl('/login');
  }

}
