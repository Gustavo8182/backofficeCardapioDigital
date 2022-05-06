import { Component, OnInit, Input } from '@angular/core';
import { Snack } from '../../../shared/model/snack.model';
import { SnackServiceService } from '../service/snackService.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  @Input()
  snack?:Snack;

  constructor(
     private snackService : SnackServiceService
     ) { }

  ngOnInit(): void {
  }
  remove(idSnack:any) {
    let id = parseInt(idSnack);
    this.snackService.removeSnack(id).subscribe(data=>{
      console.log(data);
    });
  }

  //criar update
  update(id:any) {

  }



}
