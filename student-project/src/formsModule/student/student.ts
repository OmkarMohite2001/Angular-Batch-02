import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student implements OnInit{
  private authServ = inject(Auth);
  students: any[] = [];

  editindex: number = -1;

  student = {
    name: '',
    email: '',
     age: null,
    course: '',
  };
  ngOnInit(): void {
    this.getStudentsData();
  }
  onSubmit(form: any) {
    // if (this.editindex === -1) {
    //   this.students.push(form.value);
    // } else {
    //   this.students[this.editindex] = form.value;
    //   this.editindex = -1;
    // }

    // form.reset();
       if (this.editindex === -1) {
        this.authServ.addStudent(this.student).subscribe({
          next:(res:any)=>{
            console.log('Success',res);
            this.getStudentsData();
            form.reset();
          },
          error:(err:any)=>{
            console.log('Error',err)
          }
        })
    } else {
      this.students[this.editindex] = form.value;
      this.editindex = -1;
    }

    form.reset();
  }

  editStudent(student: any, index: number) {
    ((this.student = { ...student }), (this.editindex = index));
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  getStudentsData(){

    this.authServ.getStudents().subscribe({
      next:(res:any)=>{
       console.log('Data',res);
        this.students = res.data;
      },
      error:(err:any)=>{
        console.log('err',err);
      }
      
    })
  }

  
}
