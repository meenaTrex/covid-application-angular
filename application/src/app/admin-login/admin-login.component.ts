import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { Router } from '@angular/router';
import { VerifyAdminService } from './services/verify-admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService,
    private router: Router, private verifyAdminService: VerifyAdminService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  login() {

    if (this.verifyAdminService.verifyAdmin(this.loginForm.value)) {
      this.loginService.login();
      this.toastrService.success('Welcome Admin');
      this.router.navigateByUrl('/covid');

    }
    else {
      //alert("Invalid Admin Credentials");
      this.toastrService.error('Invalid credentials');
    }
  }

}
