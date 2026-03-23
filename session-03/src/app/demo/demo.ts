import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  name:any = "omkar";

  username = "";
  password = "";

  login(){
    if(this.username === 'admin' && this.password === 'a123'){
      alert('Login Successfully');
    }
  }
}
