import { Injectable } from '@angular/core'
import { UserInterface } from "../../models/types/user-data.interface"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userData$ = new BehaviorSubject<UserInterface>({} as UserInterface)

  constructor() { }

  public get userDataObs() {
    return this._userData$.asObservable()
  }

  public setUserData(data: UserInterface) {
    this._userData$.next(data)
  }
}
