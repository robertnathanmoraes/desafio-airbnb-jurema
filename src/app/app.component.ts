import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-airbnb-jurema';
  tags = [{name: 'Dates'}, {name: 'Guests'}, {name: 'Work trip'}, {name: 'Type of place'}, {name: 'Price'}, {name: 'Instant Book'}];
}
