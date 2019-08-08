import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
countDownDate: any;
now: any;
distance: any;
days: any;
hours: any;
minutes: any;
seconds: any;

x = setInterval(function() {
  this.countDownDate = new Date("April 3 2021 17:30:00").getTime();
  this.now = new Date().getTime();
  this.distance = this.countDownDate - this.now;
  this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
  document.getElementById('demo').innerHTML = this.days + " Days Left";
  if(this.distance < 0){
    clearInterval(this.x);
    document.getElementById('demo').innerHTML = " THE DAY IS TODAY!!!";
  }
}, 1000);
  constructor() { }

  ngOnInit() {
  }

}
