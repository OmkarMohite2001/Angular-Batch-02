import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from './demo/demo';
import { Attribute } from './attribute/attribute';
import { CustomDirective } from './custom-directive/custom-directive';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [CustomDirective,Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives-03');


}
