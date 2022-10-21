import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (true) {
        request = request.clone({
            headers: request.headers
                .set('Authorization', 'Bearer ' + '')
        });
    }
    return next.handle(request);
  }
}
