import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, validate, ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-form-group-demo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-group-demo.html',
  styleUrl: './form-group-demo.css',
})
export class FormGroupDemo {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    age: ['', Validators.required, this.ageValidation],
  });

  onSubmit() {
    console.log(this.form.value);
  }
  ageValidation(control:AbstractControl):ValidationError|any{
    if(control.value < 18){
     return { underAge: true };
    }else{
     return null
    }
  }
}
