import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetails = false;
  logs = [];
  fifthClicked = false;

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.logs.push(new Date());
  }
}
