import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-result',
  imports: [CommonModule],
  templateUrl: './student-result.html',
  styleUrl: './student-result.css',
})
export class StudentResult {
 studentId: any;
  semester: any;
  student: any;

  students = [
    { id: 101, name: 'Omkar', marks: 85 },
    { id: 102, name: 'Rahul', marks: 78 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // 🔥 STEP 1: parameters get kara
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.semester = this.route.snapshot.paramMap.get('semester');

    // 🔥 STEP 2: student find kara
    this.student = this.students.find(
      s => s.id == this.studentId
    );
  }
}
