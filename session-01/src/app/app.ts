import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  // templateUrl: './app.html',
  templateUrl: './omkar.html',
  // template:`<h2>Fork Infosystem</h2>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session-01');

}
