import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inquiry } from '../../models/inquiry';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  private serverUrl = './assets/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  sendInquiry(inquiry: Inquiry): Observable<any> {
    return this.http.post<Inquiry>(
      this.serverUrl + 'php/mailer.php', inquiry, this.httpOptions
    ).pipe(
      catchError(error => this.handleError(error))
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    const errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };

    return throwError(errorData);
  }
}
