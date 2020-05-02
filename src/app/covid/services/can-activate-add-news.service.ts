import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAddNewsService implements CanActivate {

  constructor(private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.loginService.isLoggedIn();
  }
}
