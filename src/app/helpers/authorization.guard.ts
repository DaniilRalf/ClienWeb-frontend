import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";
import {UserOfLocalStorageInterface} from "../models/types/user-data.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService,) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userOfLocalStorage: string | null = ''
    userOfLocalStorage = this.localStorageService.getLocalStorageItem('user')
    if (userOfLocalStorage) {
      return !!JSON.parse(userOfLocalStorage).token
    }
    return false
  }

}
