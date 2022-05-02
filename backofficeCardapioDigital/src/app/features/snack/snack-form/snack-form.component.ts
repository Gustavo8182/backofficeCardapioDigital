import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Snack } from '../../../shared/model/snack.model';
import { SnackServiceService } from '../service/snackService.service';


@Component({
  selector: 'app-snack-form',
  templateUrl: './snack-form.component.html',
  styleUrls: ['./snack-form.component.scss']
})
export class SnackFormComponent implements OnInit {

  snack:Snack = {
    name:"string",
    number: 1,
    description:"string",
    price:2,
    img:"string"
  }

  constructor(
    private snackService : SnackServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  snackForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required])
  });

  cadastro(){
    alert("cadastrado com sucesso");
    window.location.reload();
  }

  onSubmit() {
    const formValue = this.snackForm.value;
    this.snack.name = formValue.name;
    this.snack.number = formValue.number;
    this.snack.description = formValue.description;
    this.snack.price = formValue.price;
    this.snack.img = formValue.img;
    this.snackService.createSnack(this.snack);
    alert('Aluno adicionado com sucesso!');
    this.router.navigateByUrl('/home');
  }

}
