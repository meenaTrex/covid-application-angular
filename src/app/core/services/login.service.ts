import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  get loggedIn() {
    return this.loggedIn$.asObservable()
  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn$.next(loggedIn);
  }

  public login() {
    localStorage.setItem('token', 'admin');
    this.setLoggedIn(true);
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('token'))
      return true;
    return false;
  }

  public logout() {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
  }
}
