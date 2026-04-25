import { Component, inject } from '@angular/core';
import { StudentData ,Student} from '../student';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-summery',
  imports: [CommonModule],
  templateUrl: './student-summery.html',
  styleUrl: './student-summery.css',
  providers:[Student]
})
export class StudentSummery {
 students:StudentData[]=[];
  totalStudent:number = 0;

  // studServ = inject(Student);
  // http = inject(HttpClient);

  
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
