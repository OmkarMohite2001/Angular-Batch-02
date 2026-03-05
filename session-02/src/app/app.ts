import { Component, signal } from '@angular/core';
import { Student } from "../student/student";
import { LifeCycle } from '../life-cycle/life-cycle';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('session-02');
}
