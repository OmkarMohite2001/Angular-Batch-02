import { Component, inject, OnInit } from '@angular/core';
import { Student, StudentData } from '../../../core/services/student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:StudentData[]=[];
  totalStudent:number = 0;

  // studServ = inject(Student);

  constructor(private studServ:Student){
    this.students = this.studServ.getStudent();
        this.totalStudent = this.studServ.getStudentCount();

  }
  
  // ngOnInit(): void {
  //    this.students = this.studServ.getStudent();
  //        this.totalStudent = this.studServ.getStudentCount();

  // }

  addNewStudent():void{
    this.studServ.addStudent({
      id:4,name:'Malinga',course:'Hotel Management'
    });
    this.students = this.studServ.getStudent();
    this.totalStudent = this.studServ.getStudentCount();
  };

}
