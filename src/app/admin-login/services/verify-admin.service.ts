import { Injectable } from '@angular/core';
import adminData from '../../../assets/admin-login-credentials.json';
import { IAdmin } from '../../shared/interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class VerifyAdminService {
  credentials: IAdmin;
  constructor() {
    this.credentials = adminData;
  }

  verifyAdmin(data: IAdmin): boolean {
    if (data.username == this.credentials.username) {
      if (data.password == this.credentials.password) {
        return true;
      }
      return false;
    }
    return false;
  }
}
