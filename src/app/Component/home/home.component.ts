import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  live: boolean = false;

  constructor() { }

  ngOnInit(): void { 
   this.onLive()
  }

  onLive(): void {
    const date = new Date();
    const wednesday = date.getDay() === 3;
    const sunday = date.getDay() === 0;

    if ( wednesday || sunday ) {
      if ( wednesday && date.getHours() === 18 && date.getMinutes() <= 59 ) {
        this.live = true; 
      }else if ( sunday && date.getHours() === 8 && date.getMinutes() <= 59 ) {
        this.live = true;
      }
    } else {
      this.live = false;
    }
  }

}
