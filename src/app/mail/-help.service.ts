import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Models } from './models';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private matiereUrl  = "http://localhost:8081/mail/mail"
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
  public create(models:Models):Observable<any> {
    return this.http.post(`${this.matiereUrl}/add`,models).pipe(
      catchError(this.errorHandler)
    );
  }



    /**
   * Write code on Method
   *
   * @return response()
   */
  public getAll():Observable<any> {
    return this.http.get(`${this.matiereUrl}/`).pipe(
      catchError(this.errorHandler)
    );
  }

    /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number) {
    return this.http.delete(`${this.matiereUrl}/delete/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

    /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<any> {
    return this.http.get(`${this.matiereUrl}/get/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }



    /**
   * Write code on Method
   *
   * @return response()
   */
  Update(id:number ,models:Models): Observable<any> {
    // return this.http.put<User>(`${this.matiereUrl}/update/${user.id}`,user);
    return this.http.put(this.matiereUrl+ '/update/'+ id, JSON.stringify(models)).pipe(
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
