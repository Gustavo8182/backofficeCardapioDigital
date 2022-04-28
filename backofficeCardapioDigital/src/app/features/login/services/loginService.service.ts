import { Injectable } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  users:Array<User> = [
  {
    id : 1,
    name : "Gustavo",
    email : "teste@teste.com",
    password : "123456",
  },
  {
    id : 2,
    name : "Rodrigo",
    email : "teste@teste.com",
    password : "123456",
 }
]

constructor() { }

getByEmail(email:String,password:String){
  return this.users.find((user) => user.email === email && user.password === password);
}

createStudent(user: User) {
this.users.push(user);
console.log(this.users);
return this.users;
}
updateRegister(email:string,password:String){

}

}
