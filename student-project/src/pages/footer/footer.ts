import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  channelName: string = 'TrailAndTeach';
  youtubeUrl: string = 'https://www.youtube.com/@trailandteach';
  currentYear: number = new Date().getFullYear();

  courses: string[] = [
    'Web Development',
    'Programming Basics',
    'Angular Masterclass',
    '.NET Core API',
  ];

  onSubscribe(event: Event) {
    event.preventDefault();
    alert('Thank you for joining TrailAndTeach!');
  }
}
