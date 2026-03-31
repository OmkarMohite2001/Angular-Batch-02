import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userId:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
