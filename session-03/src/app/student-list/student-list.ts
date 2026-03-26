import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
students = [
    { id: 101, name: 'Omkar' },
    { id: 102, name: 'Rahul' }
  ];
}
