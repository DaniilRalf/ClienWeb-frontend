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
    const token = this.localStorageService.getLocalStorageItem('token')?.split('"').join('');
    if (token) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + token)
          .set('Access-Control-Allow-Origin', '*')
      })
    } else {
      request = request.clone({
        headers: request.headers
          .set('Access-Control-Allow-Origin', '*')
      })
    }

    return next.handle(request);
  }
}
