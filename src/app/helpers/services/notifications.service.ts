import {Injectable} from '@angular/core'
import {MatSnackBar} from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

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
}
