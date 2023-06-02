import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  on = false

  onClick(): void {
    this.on = !this.on
  }

  message(): string {
    return 'I\'m ' + (this.on ? 'on' : 'off') + '!';
  }
}
