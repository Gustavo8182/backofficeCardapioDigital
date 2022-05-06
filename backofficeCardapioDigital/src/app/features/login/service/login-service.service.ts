import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  users:Array<User> = [ ];

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(
     private httpClient: HttpClient
     ) { }


  getDefaultUser(){
    return {
      name: 'nome',
      email: 'email',
      password: 'senha'
      }
    }


  getByEmail(email:String,password:String){
     const result:any = this.httpClient.post(`${environment.baseUrlBackend}/users/login`,email);
      return result;
}

    createUser(user:any){
    this.users.push(user);

  }

}
