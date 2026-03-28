import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  imports: [FormsModule, CommonModule],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  username ="";

  selected = 'home';

  isError:boolean = false;
}
