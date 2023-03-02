import { Component, OnInit } from '@angular/core'
import { MatDialog } from "@angular/material/dialog"
import { ModalLoginAuthComponent } from "../modal-login-auth/modal-login-auth.component"
import {filter, switchMap, take} from "rxjs"
import { HttpService } from "../../services/http.service"
import { LoginRegistrationInterface } from "../../models/types/login-registration.interface"
import { LocalStorageService } from "../../services/local-storage.service"
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
        switchMap((outputData: {tag: 'loginForm' | 'registrationForm', data: LoginRegistrationInterface}) => {
          if (outputData.tag === 'loginForm') {
            return this.httpService.login(outputData.data)
          } else {
            return this.httpService.registration(outputData.data)
          }
        }),
        take(1)
    ).subscribe((req?: any) => {
      if (req.result === true) {
        this.localStorageService.setLocalStorageItem('token', req.token)
      }
    })
  }

  public logout(): void {
    this.localStorageService.removeLocalStorageItem('token')
    this.publicNavigate()
  }

  public checkTokenForHeader(): boolean {
    return !!this.localStorageService.getLocalStorageItem('token')
  }

  public personalNavigate(): void {
    this.router.navigate(['/personal'])
  }

  public publicNavigate(): void {
    this.router.navigate(['/'])
  }

}
