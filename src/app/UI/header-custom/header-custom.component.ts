import { Component, OnInit } from '@angular/core'
import { MatDialog } from "@angular/material/dialog"
import { ModalLoginAuthComponent } from "../modal-login-auth/modal-login-auth.component"
import {filter, Observable, switchMap, take} from "rxjs"
import { HttpService } from "../../helpers/services/http.service"
import {LoginOrRegistrationInputInterface, LoginRegistrationInterface} from "../../models/types/login-registration.interface"
import { LocalStorageService } from "../../helpers/services/local-storage.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.dialog
      .open(ModalLoginAuthComponent, {})
      .afterClosed().pipe(
        filter((outputData) => outputData !== undefined),
        switchMap((
          outputData: {tag: 'loginForm' | 'registrationForm', data: LoginRegistrationInterface}
        ): Observable<LoginOrRegistrationInputInterface> => {
          if (outputData.tag === 'loginForm') {
            return this.httpService.login(outputData.data)
          } else {
            return this.httpService.registration(outputData.data)
          }
        }),
        take(1)
    ).subscribe((res) => {
      this.localStorageService.setLocalStorageItem('user', res)
    }), (err: any) => {
      //TODO add handler error
    }
  }

  public logout(): void {
    this.localStorageService.removeLocalStorageItem('user')
    this.publicNavigate()
  }

  public checkTokenForHeader(): boolean {
    return !!this.localStorageService.getLocalStorageItem('user')
  }

  public personalNavigate(): void {
    this.router.navigate(['/personal'])
  }

  public publicNavigate(): void {
    this.router.navigate(['/'])
  }

}
