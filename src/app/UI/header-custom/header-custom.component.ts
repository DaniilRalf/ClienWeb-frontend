import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalLoginAuthComponent} from "../modal-login-auth/modal-login-auth.component";
import {switchMap} from "rxjs";
import {HttpService} from "../../services/http.service";
import {LoginRegistrationInterface} from "../../models/types/login-registration.interface";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private httpService: HttpService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.dialog
      .open(ModalLoginAuthComponent, {})
      .afterClosed().pipe(
        switchMap((outputData: {tag: 'loginForm' | 'registrationForm', data: LoginRegistrationInterface}) => {
          if (outputData.tag === 'loginForm') {
            return this.httpService.login(outputData.data)
          } else {
            return this.httpService.registration(outputData.data)
          }
        })
    ).subscribe((req: any) => {
      if (req.result === true) {
        this.localStorageService.setLocalStorageItem('token', req.token)
      }
    })
  }

  public logout(): void {
    this.localStorageService.removeLocalStorageItem('token')
  }

  public checkTokenForHeader(): boolean {
    return !!this.localStorageService.getLocalStorageItem('token')
  }

}
