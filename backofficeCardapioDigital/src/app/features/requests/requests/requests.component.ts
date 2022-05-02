import { Component, Input, OnInit } from '@angular/core';
import { Snack } from '../../../shared/model/snack.model';
import { Request } from '../../../shared/model/request.model';
import { RequestServiceService } from '../service/requestService.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  @Input()
  request?:Request

  constructor(
    private requestService:RequestServiceService
    ) { }

  ngOnInit(): void {
  }

  remove(id:any){
    this.requestService.removeRequest(id);
  }
}
