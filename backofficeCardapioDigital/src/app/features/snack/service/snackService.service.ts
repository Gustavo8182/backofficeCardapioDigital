import { Injectable } from '@angular/core';
import { Snack } from '../../../shared/model/snack.model';

@Injectable({
  providedIn: 'root'
})
export class SnackServiceService {

  snacks:Array<Snack> = [
    {
      id:1,
      name:"X-tudo",
      number: 1,
      description:"Pão,carne,ovo,queijo.presunto,salada e melho especial",
      price:15.00,
      img:"https://sachefmio.blob.core.windows.net/fotos/x-tudo--batata-frita-123514.jpg"
    },
    {
      id:2,
      name:"X-tudo",
      number: 1,
      description:"Pão,carne,ovo,queijo.presunto,salada e melho especial",
      price:18.00,
      img:"https://sachefmio.blob.core.windows.net/fotos/x-tudo--batata-frita-123514.jpg"
    },
    {
      id:3,
      name:"X-tudo",
      number: 1,
      description:"Pão,carne,ovo,queijo.presunto,salada e melho especial",
      price:13.00,
      img:"https://sachefmio.blob.core.windows.net/fotos/x-tudo--batata-frita-123514.jpg"
    },
    {
      id:4,
      name:"X-tudo",
      number: 1,
      description:"Pão,carne,ovo,queijo.presunto,salada e melho especial",
      price:10.00,
      img:"https://sachefmio.blob.core.windows.net/fotos/x-tudo--batata-frita-123514.jpg"
    }
  ]

constructor() { }

   getAll(){
     return this.snacks;
   }

   createSnack(snack:Snack){
    this.snacks.push(snack);
  }

  removeSnack(id:any) {
    const snacksndex = this.snacks.findIndex((s) => s.id === Number(id));
    this.snacks.splice(snacksndex, 1);
  }



}
