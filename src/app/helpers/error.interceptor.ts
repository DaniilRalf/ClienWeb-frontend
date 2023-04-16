import {Injectable} from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http'
import {catchError, Observable, of} from 'rxjs'
import {Router} from "@angular/router"
import {LocalStorageService} from "../services/local-storage.service"
import {NotificationsService} from "../services/notifications.service"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private notificationsService: NotificationsService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse, caught): any => {
      switch (err.status) {
        case 403:
          this.notificationsService.openErrorNotification('Необходима авторизация', 'Скрыть')
          this.router.navigate(['/main']).then()
          this.localStorageService.removeLocalStorageItem('user')
      }
      return of(null)
    }))
  }
}
