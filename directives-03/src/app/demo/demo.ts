import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  // date: string = '28-03-2026';

  // isVisible:boolean = true;
  // isChecked:boolean = false;

  // toggle(){
  //  if(this.isVisible){
  //   this.isVisible = false;

  //  }else{
  //   this.isVisible = true;
  //  }
  // }

  // items = ['Apple','Banana','Mango'];

  // arr = [10,20,40,45,65,78];

  // students = [
  //   {id:1,name:'Harry'},
  //   {id:2,name:'Potter'},
  // ]

  role:string = 'admin';
}
