import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl= "https://apirestjsonserver.herokuapp.com/usuarios"
  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  showMessage(msg: string, isError: boolean=false): void{
    this.snackBar.open(msg, '',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError?['msg-error'] : ['msg-success']
    })
  }

  create(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(this.baseUrl, usuario).pipe(
        map((obj) => obj), catchError((e) => this.errorHandler(e))
      )
  }
 
  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)  
    return EMPTY
  }

  read(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl).pipe(
      map((obj) => obj), catchError((e) => this.errorHandler(e))
    ) 
  }

  readById(id:string): Observable<Usuario>{
    const url=`${this.baseUrl}/${id}`    
    return  this.http.get<Usuario>(url).pipe(
      map((obj) => obj), catchError((e) => this.errorHandler(e))
    )
  }

  readByCpf(cpf:string): Observable<Usuario>{
    const url=`${this.baseUrl}?cpf=${cpf}`    
    console.log ("url = ", url)
    return  this.http.get<Usuario>(url)
    
  }

  readByFilter(nome:string, perfil:string, situacao:string): Observable<Usuario[]>{
    const url=`${this.baseUrl}?nome_like=${nome}&perfil_like=${perfil}&situacao_like=${situacao}`
    return  this.http.get<Usuario[]>(url).pipe(
      map((obj) => obj), catchError((e) => this.errorHandler(e))
    )
  }

  update(usuario: Usuario): Observable<Usuario>{
    const url=`${this.baseUrl}/${usuario.id}`
    return this.http.put<Usuario>(url,usuario).pipe(
      map((obj) => obj), catchError((e) => this.errorHandler(e))
    )
  }

  delete(id:number): Observable<Usuario>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Usuario>(url).pipe(
      map((obj) => obj), catchError((e) => this.errorHandler(e))
    )
  }

}
