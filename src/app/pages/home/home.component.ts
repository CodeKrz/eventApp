import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
message = 'Welcome';
news = 'This is where news will be displayed in the future.'
  constructor() { }

  ngOnInit() {
  }

}
