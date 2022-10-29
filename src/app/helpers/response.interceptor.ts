import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {StorageService} from "../services/storage.service";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private StorageService: StorageService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    next.handle(request).subscribe((i:any) => {
      if (i.body?.result == false){
        this.StorageService.responseNotificationChange(i.body?.message);
        // console.log(i.body?.message)
      }
    })

    // @ts-ignore
    return next.handle(request).pipe(catchError((arr: any): any => {
      // console.log(arr);
      switch (arr.status){
        case 0:
          this.StorageService.responseNotificationChange('Unknown error');
          // console.log('Unknown error');
          break;
        case 404:
          this.StorageService.responseNotificationChange('Server Error');
          // console.log('Server Error');
          break;
      }

    }));
  }
}
