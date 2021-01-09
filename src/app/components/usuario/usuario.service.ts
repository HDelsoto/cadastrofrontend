
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl= "http://localhost:3001/usuarios"
  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: ['blue-snackbar']
    })
  }

  create(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(this.baseUrl, usuario)
  }
}
