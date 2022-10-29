import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserInterface} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public USER?: UserInterface;
  public token?: string | null | undefined;
  public role?: string | null | undefined;
  public responseNotificationClass = 'response-notification-off';
  public responseNotificationMessage = 'response-notification-off';


  constructor(
    private router: Router,
  ) { }

  public setUser(i: any) {
    localStorage.setItem('token', i.token);
    localStorage.setItem('role', i.role);
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
  }

  public getUser() {
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    return {
      'token': this.token,
      'role': this.role,
    }
  }

  public delUser() {
    this.token = '';
    this.role = '';
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    if (this.router.url.includes('/admin/')){
      this.router.navigate(['/main', 'review']);
    }
  }

  public responseNotificationChange(message: string){
    this.responseNotificationMessage = message;
    this.responseNotificationClass = 'response-notification-on';
    setTimeout(() => {
      this.responseNotificationClass = 'response-notification-off';
    }, 5000)
  }

}
