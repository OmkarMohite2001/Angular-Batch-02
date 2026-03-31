import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Studentlist } from '../studentlist/studentlist';

@NgModule({
  declarations: [Studentlist],
  imports: [CommonModule],
  exports:[Studentlist]
})
export class StudentModule {}
