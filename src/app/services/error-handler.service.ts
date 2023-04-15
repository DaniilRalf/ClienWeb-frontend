import {Injectable} from '@angular/core'
import {MatSnackBar} from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  /** Error notification*/
  public openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
