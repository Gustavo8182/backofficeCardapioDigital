import { Component, OnInit } from '@angular/core';
import { Snack } from 'src/app/shared/model/snack.model';
import { RequestServiceService } from '../service/requestService.service';
import { Request } from '../../../shared/model/request.model';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss']
})
export class RequestsListComponent implements OnInit {

  requests:Array<Request> = this.requestService.getAll();
  constructor(
    private requestService : RequestServiceService
  ) { }

  ngOnInit(): void {
  }

}
