import {Injectable} from '@angular/core'
import {MatSnackBar} from "@angular/material/snack-bar"
import {BehaviorSubject, Observable} from "rxjs";
import {PreloaderTypesEnum} from "../../models/enum/preloader-types.enum";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private isPreloaderActive$: BehaviorSubject<{
    event: boolean,
    type: PreloaderTypesEnum }> = new BehaviorSubject<{
    event: boolean,
    type: PreloaderTypesEnum }>({event: false, type: PreloaderTypesEnum.variant_1})

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  /** Error notification*/
  public openErrorNotification(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  /** Event notification*/
  public openEventNotification(message: string): void {
    this._snackBar.open(message, '', {
      duration: 3000,
    })
  }

  /** Change state preloader*/
  public setPreloader(data: { event: boolean, type: PreloaderTypesEnum }): void {
    if (!data.event) {
      setTimeout(() => {
        this.isPreloaderActive$.next(data)
      }, 500)
    } else {
      this.isPreloaderActive$.next(data)
    }

  }

  /** Get state preloader*/
  public getPreloader(): Observable<{ event: boolean, type: PreloaderTypesEnum }> {
    return this.isPreloaderActive$.asObservable()
  }

}
