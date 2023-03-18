import { Component, OnInit } from '@angular/core'
import { HttpService } from "../../../services/http.service"
import { UserInterface } from "../../../models/types/user-data.interface"
import { UserService } from "../../../services/user.service"
import { take } from "rxjs"

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  private getUserData(): void {
    //TODO добавь id юзера
    this.httpService.getUserData(1)
      .pipe(take(1))
      .subscribe((userData: UserInterface) => {
        this.userService.setUserData(userData)
      })
  }

}
