import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snack } from 'src/app/shared/model/snack.model';
import { Request } from './../../../shared/model/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  requests:Array<Request> = []

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

constructor(
  private httpClient: HttpClient
) { }

getAll(){
  return this.httpClient.get<Array<Request>>(`${environment.baseUrlBackend}/request`, this.options);
  }

removeRequest(id:number) {
  return this.httpClient.delete<any>(`${environment.baseUrlBackend}/request/remove/${id}`, this.options);
  }

}



