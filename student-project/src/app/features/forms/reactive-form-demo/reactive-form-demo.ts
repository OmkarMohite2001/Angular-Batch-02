import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form-demo',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-demo.html',
  styleUrl: './reactive-form-demo.css',
})
export class ReactiveFormDemo {
  name: any = new FormControl('', Validators.required);
  email: any = new FormControl('', [Validators.required,Validators.email]);
  password: any = new FormControl('', Validators.required);
  age: any = new FormControl('', Validators.required);
  city: any = new FormControl('Karad', Validators.required);

  onSubmit() {
    console.log({
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      age: this.age.value,
      city: this.city.value,
    });
  }
}
