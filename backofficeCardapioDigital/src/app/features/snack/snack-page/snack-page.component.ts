import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './snack-page.component.html',
  styleUrls: ['./snack-page.component.scss']
})
export class SnackPageComponent implements OnInit {

  expression: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.expression = true;
  }
}
