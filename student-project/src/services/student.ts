import { Injectable } from '@angular/core';
export interface StudentData {
  id:number;
  name:string;
  course:string;
}
@Injectable({
  providedIn: 'root',
})

export class Student {
  private students : StudentData[] =[
    {id:1,name:'omkar',course:'BCS'},
    {id:2,name:'Ram',course:'MCS'},
    {id:3,name:'Harry',course:'BCA'}
  ]

  getStudent():StudentData[]{
    return [...this.students];
  }
  addStudent(student:StudentData):void{
    this.students.push(student);
  }
  getStudentCount():number{
    return this.students.length;
  }
}
