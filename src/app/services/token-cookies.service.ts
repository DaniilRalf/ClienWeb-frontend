import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenCookiesService {

  constructor(
    public cookieService: CookieService
  ) { }


  public getCookie(): any{
    return this.cookieService.get('Test');
  }

  public setCookie(){
    return this.cookieService.set('Test', 'Hello World');
  }

  public delCookie(){
    return this.cookieService.delete('Test');
  }
}
