import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Models } from './mail';



@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private matiereUrl  = "http://localhost:8081/mail/CRUD"
  
  constructor(
    private http: HttpClient
  )
  { 

  }
    /**
   * Write code on Method
   *
   * @return response()
   */
  public create(models:Models):Observable<Models> {
    return this.http.post<Models>(`${this.matiereUrl}/add`,models)
  }



    /**
   * Write code on Method
   *
   * @return response()
   */
  public getAll():Observable<Models[]> {
    return this.http.get<Models[]>(`${this.matiereUrl}`)
  }

    /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number):Observable<Models> {
    return this.http.delete<Models>(`${this.matiereUrl}/delete/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

    /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<Models> {
    return this.http.get<Models>(`${this.matiereUrl}/get/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }



    /**
   * Write code on Method
   *
   * @return response()
   */
  Update(id:number ,models:Models): Observable<Models> {
    // return this.http.put<User>(`${this.matiereUrl}/update/${user.id}`,user);
    return this.http.put<Models>(this.matiereUrl+ '/update/'+ id, JSON.stringify(models)).pipe(
      catchError(this.errorHandler)
    );
  }


   /** 
   * Write code on Method
   *
   * @return response()
   */
   errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
