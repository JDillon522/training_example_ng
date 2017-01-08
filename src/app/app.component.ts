import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 Playground';
  isDarkTheme: boolean = false;

  changeThemeToDark() {
    console.log('THEMING')
  }
}
