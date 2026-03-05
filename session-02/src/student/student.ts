import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  // template: `<h3>Hello This Is Template</h3>`,
  // styleUrl: './student.css',
  styles: [
    `
      h2 {
        color: aqua;
        background-color: black;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Student {
  name: string = 'Fork Infosystem';
  marks: number = 78;
  // transformedDate: any;

  // constructor(private date: DatePipe) {}

  date = inject(DatePipe);

  showMessege() {
    alert('Show Messege Function Executed');
    this.marks++;
  }

  transformedDate = this.date.transform(new Date(), 'dd-MMM-yyyy');
}
