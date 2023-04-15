import { Component, OnInit } from '@angular/core'
import { HttpService } from "../../../services/http.service"
import { UserInterface, UserOfLocalStorageInterface } from "../../../models/types/user-data.interface"
import { UserService } from "../../../services/user.service"
import { take } from "rxjs"
import { LocalStorageService } from "../../../services/local-storage.service"

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  userOfLocalStorage: UserOfLocalStorageInterface = {} as UserOfLocalStorageInterface

  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  private getUserData(): void {
    /** Get user data from local storage and get all him data from DB*/
    const userOfLocalStorage = this.localStorageService.getLocalStorageItem('user')
    if (userOfLocalStorage) {
      this.userOfLocalStorage = JSON.parse(userOfLocalStorage)
    }
    this.httpService.getUserData(this.userOfLocalStorage?.id)
      .pipe(take(1))
      .subscribe((userData: UserInterface) => {
        this.userService.setUserData(userData)
      })
  }

}
