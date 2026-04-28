import { Component } from '@angular/core';
import { College } from '../models/college';
import { Colleges } from '../colleges/colleges';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-university',
  imports: [Colleges, CommonModule],
  templateUrl: './university.html',
  styleUrl: './university.css',
})
export class University {
  collegesData: College[] = [
    {
      id: 1,
      name: 'YC College',
      location: 'Karad',
      principle: 'DR Kengar',
      studentCount: 600,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'SGM College',
      location: 'Karad',
      principle: 'DR Patil',
      studentCount: 600,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 1,
      name: 'GOVT College',
      location: 'Karad',
      principle: 'DR Harry',
      studentCount: 600,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 1,
      name: 'Kanya Shala College',
      location: 'Karad',
      principle: 'DR Spiderman',
      studentCount: 600,
      image: 'https://picsum.photos/200/300',
    },
  ];
  selectedCollege:College|null = null;
  messegeFromChild:string = '';

  onSelectedCollege(college:College):void{
    this.selectedCollege = college;
  }
  recieveMessge(data:string):void{
    this.messegeFromChild = data;
  }
}
