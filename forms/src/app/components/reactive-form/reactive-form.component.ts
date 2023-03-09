import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  carForm!: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.carForm);
  }

  onClear() {
    this.carForm?.reset();
  }

  private initializeForm() {
    this.carForm = new FormGroup({
      'carBrand': new FormControl("Audi R8", Validators.required),
      'carDescription': new FormControl(null),
      'carAmount': new FormControl(null)
    });
  }
}
