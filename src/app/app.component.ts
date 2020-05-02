import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid Tracking Application';
  constructor() { }

  ngOnInit(): void {

  }

}
