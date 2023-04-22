import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { LocalStorageService } from "../services/local-storage.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: string = ''
    const userOfLocalStorage = this.localStorageService.getLocalStorageItem('user')
    if (userOfLocalStorage) {
      token = JSON.parse(userOfLocalStorage).token.split('"').join('');
    }
    if (token) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + token)
      })
    }

    return next.handle(request);
  }
}
