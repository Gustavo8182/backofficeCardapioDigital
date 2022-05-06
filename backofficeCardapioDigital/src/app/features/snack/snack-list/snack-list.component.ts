import { Component, OnInit } from '@angular/core';
import { Snack } from '../../../shared/model/snack.model';
import { SnackServiceService } from '../service/snackService.service';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.scss']
})
export class SnackListComponent implements OnInit {

  snacks:Array<Snack> = [];

  constructor(
    private snackService :SnackServiceService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.snackService.getAll().subscribe(data =>{
      console.log(data);
      data.forEach(element => {
        this.snacks.push(element);
      });
    })
  }
}
