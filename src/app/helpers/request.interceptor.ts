import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse, HttpResponseBase
} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';
import {catchError} from "rxjs";
import {StorageService} from "../services/storage.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private StorageService: StorageService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.StorageService.token) {
        request = request.clone({
            headers: request.headers
                .set('Authorization', 'Bearer ' + this.StorageService.token)
        });
    }

    return next.handle(request);
  }
}
