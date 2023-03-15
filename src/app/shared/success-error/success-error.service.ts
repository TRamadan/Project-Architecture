import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SuccessErrorService {
  constructor(private snackBar: MatSnackBar) {}
  durationInSeconds: number = 5;

  //this is a shared function needed to show a success message
  showSuccessmsg() {
    this.snackBar.open('Done message', 'Success operation', {
      duration: this.durationInSeconds * 1000,

      panelClass: ['green-snackbar'],
    });
  }

  //this is a shared function needed to show an error message
  showErrormsg() {
    this.snackBar.open('Error', 'Error operation', {
      duration: this.durationInSeconds * 1000,
      panelClass: ['red-snackbar'],
    });
  }
}
