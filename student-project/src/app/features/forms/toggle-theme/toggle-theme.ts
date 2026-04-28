import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  imports: [CommonModule],
  templateUrl: './toggle-theme.html',
  styleUrl: './toggle-theme.css',
})
export class ToggleTheme {
  isDark:boolean = true;
  toggleMe(){
    this.isDark = !this.isDark;
  }
}
