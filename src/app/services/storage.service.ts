import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public jwt_token?: string | null;
  public role?: string | null;

  constructor(
  ) { }

  public setUser(i: any) {
    localStorage.setItem('jwt_token', i.jwt_token);
    localStorage.setItem('role', i.role);
    this.jwt_token = localStorage.getItem('jwt_token');
    this.role = localStorage.getItem('role');
  }

  public getUser() {
    this.jwt_token = localStorage.getItem('jwt_token');
    this.role = localStorage.getItem('role');
    return {
      'jwt_token': this.jwt_token,
      'role': this.role,
    }
  }

  public delUser() {
    this.jwt_token = '';
    this.role = '';
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('role');
  }

}
