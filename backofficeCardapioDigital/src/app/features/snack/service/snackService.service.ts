import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Snack } from '../../../shared/model/snack.model';

@Injectable({
  providedIn: 'root'
})
export class SnackServiceService {

  snacks:Array<Snack> = [ ]

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

constructor(
  private httpClient: HttpClient
) { }

getAll(){
    return this.httpClient.get<Array<Snack>>(`${environment.baseUrlBackend}/snacks`, this.options);
  }

createSnack(snack:Snack){
  return this.httpClient.post(`${environment.baseUrlBackend}/snacks/create`,snack,this.options);
  }

removeSnack(id:number) {
    return this.httpClient.delete<any>(`${environment.baseUrlBackend}/snacks/${id}`, this.options);
 }

 //criar ipdate


}
