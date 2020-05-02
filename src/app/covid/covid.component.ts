import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.subsForLogin();

  }

  subsForLogin() {

    this.loginService.loggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }

  logout() {
    this.loginService.logout();
    this.loginService.setLoggedIn(false);
    this.toastrService.success('Logged out Successfully!!');
  }

}
