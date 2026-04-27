import { CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ResultPipe } from './CustomPipe/result-pipe';
import { GenderPipe } from './CustomPipe/gender-pipe';
import { StatusPipe } from './CustomPipe/status-pipe';

@Component({
  selector: 'app-pipes-example',
  imports: [CommonModule,ResultPipe,GenderPipe,StatusPipe],
  templateUrl: './pipes-example.html',
  styleUrl: './pipes-example.css',
})
export class PipesExample {

    today = new Date();
    name:string = 'OmKar MoHiTe';
    salary = 50000;
    marks = 0.85;
    marks1 = 45.5;
    marks2 = 60;
}
