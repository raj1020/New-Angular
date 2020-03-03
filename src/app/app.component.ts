import { Component } from '@angular/core';

@Component({ // this is the decorator.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learn Angular';
  public namename = "Van Damme"
  public message = "";
}
