import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  user = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      this.router.navigate(['/main-layout/student']);
    } else {
      console.log('Please Enter Correct Credentials');
    }
  }
}
