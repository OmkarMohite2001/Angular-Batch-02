import { Component, EventEmitter, Input, Output } from '@angular/core';
import { College } from '../college';

@Component({
  selector: 'app-colleges',
  imports: [],
  templateUrl: './colleges.html',
  styleUrl: './colleges.css',
})
export class Colleges {
  @Input() childCollege!: College;
  @Output() collegeMessegeEvent = new EventEmitter<string>();

  sendDataToParent():void{
    this.collegeMessegeEvent.emit(this.childCollege.name);
  }
}
