import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Injectable()
export class ErrorServerInterceptor implements HttpInterceptor {

  constructor(
    private StorageService: StorageService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse){
            switch (err.status){
              case 0:
                this.StorageService.responseNotificationChange('Unknown error');
                break;
              case 400:
                this.StorageService.responseNotificationChange('Not correct data');
                break;
              case 403:
                this.StorageService.responseNotificationChange('Not authorization');
                this.StorageService.delUser();
                this.router.navigate(['/main', 'auth']);
                break;
              case 404:
                this.StorageService.responseNotificationChange('Server Error');
                break;
              case 500:
                this.StorageService.responseNotificationChange('Server Error');
                break;
            }
          }
          return throwError(() => new Error(err.statusText))
        })
      );
  }
}
