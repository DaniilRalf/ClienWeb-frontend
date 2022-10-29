import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {StorageService} from "../services/storage.service";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private StorageService: StorageService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (res: any) => {
          console.log(res)
          if (res.body?.result == false){
            this.StorageService
              .responseNotificationChange(res.body?.message || res.body?.email || res.body?.username);
          }
        }
      )
    )
  }
}
