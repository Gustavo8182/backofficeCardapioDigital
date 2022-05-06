import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  users:Array<User> = [
    {
      id: 1,
      name: "Rodrigo",
      email: "teste@teste.com",
      password: "123456"
  }
  ];

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

    // não esta funcionando
  getByEmail(email:String,password:String){
     const result:any = this.httpClient.post(`${environment.baseUrlBackend}/users/login`,email);
      return  {
        id: 1,
        name: "Rodrigo",
        email: "teste@teste.com",
        password: "123456"
    };
}

    createUser(user:User){
      return this.httpClient.post(`${environment.baseUrlBackend}/users/create`,user,this.options);
  }

}
