import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private _snackRef!: MatSnackBarRef<any>;
  private _duration: number = 3;
  private _config: MatSnackBarConfig  = {
    verticalPosition: 'top',
    horizontalPosition: 'center',
    duration: this._duration * 1000
  };

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public open(message: string, ...args: any[]): MatSnackBarRef<any> | null {
    // Poor and dirty implementation
    let snackBarRef: MatSnackBarRef<any> | null = null;

    if (!args.length) {
      snackBarRef = this.snackBar.open(message);
    }

    return snackBarRef;
  }
}
