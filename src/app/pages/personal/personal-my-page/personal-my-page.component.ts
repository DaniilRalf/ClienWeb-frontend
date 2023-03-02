import { Component, OnInit } from '@angular/core'
import { UserInterface } from "../../../models/types/user-data.interface"
import { UserService } from "../../../services/user.service"
import { Observable } from "rxjs"

@Component({
  selector: 'app-personal-my-page',
  templateUrl: './personal-my-page.component.html',
  styleUrls: ['./personal-my-page.component.scss']
})
export class PersonalMyPageComponent implements OnInit {

  public userDataObs!: Observable<UserInterface>

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userDataObs = this.userService.userDataObs
  }

}
