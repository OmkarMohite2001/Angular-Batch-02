import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from "./demo/demo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('session-03');

  name: string = 'Fork Infosystems';
  firstName: string = 'omkar';
  lastName: string = 'mohite';

  price: number = 100;
  quantity: number = 20;

  age: number = 23;

  getMessege() {
    return 'Welcome Interpolation';
  }
  changeName() {
    this.firstName = 'Harry';
    this.lastName = 'Potter';
  }

  imageUrl = 'https://picsum.photos/200/300';

  isDisabled:boolean = false;

  showMessege(){
    alert("Event Binding Triggered");
  }
}
