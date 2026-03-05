import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit,OnChanges,OnDestroy{
  constructor(){
    confirm("Consructor Called..");
  }

  ngOnChanges(){
    confirm("ngOnChanges Called")
  }

  ngOnInit(){
    confirm("ngOnInit Called");
  }

ngOnDestroy(): void {
  confirm("Component Destroyed..");
}
}
