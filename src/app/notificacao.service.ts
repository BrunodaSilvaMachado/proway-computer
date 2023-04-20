import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar:MatSnackBar) { }

  notificar(mensagem: string){
    this.snackBar.open(mensagem, "Ok",{
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition:this.verticalPosition
    });
  }
}
