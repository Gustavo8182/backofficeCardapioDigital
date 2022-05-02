import { Injectable } from '@angular/core';
import { Snack } from 'src/app/shared/model/snack.model';
import { Request } from './../../../shared/model/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  requests:Array<Request> = [
    {
    id:1,
    nameClient:"Didigo-man",
    date: "01/01/2022",
    payment:"Cartão de creedito",
    totalPrice:35.00,
    address:"rua dos bobos Nº 0"
  },
  {
    id:2,
    nameClient:"Allan castro",
    date: "01/01/2022",
    payment:"Dinheiro",
    totalPrice:30.00,
    address:"rua dos bobos Nº 1"
  }

   ]

constructor() { }

getAll(){
  return this.requests;
}

removeRequest(id:any) {
  const snacksndex = this.requests.findIndex((s) => s.id === Number(id));
  this.requests.splice(snacksndex, 1);
}


}
