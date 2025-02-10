import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Chaudiere } from '../Models/Chaudiere';

@Injectable({
  providedIn: 'root'
})
export class ChaudiereService {

  private baseUrl = 'http://localhost:8093/api/v1/chaudieres';

  constructor(private http: HttpClient) { }

  createChaudiere(chaudiere: Chaudiere): Observable<Chaudiere> {
    return this.http.post<Chaudiere>(`${this.baseUrl}/addchaudiere`, chaudiere).pipe(
      catchError(this.handleError)
    );
  }

  getChaudiereById(id: number): Observable<Chaudiere> {
    return this.http.get<Chaudiere>(`${this.baseUrl}/chaudiere/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllChaudieres(): Observable<Chaudiere[]> {
    // Retrieve access token from local storage
    const accessToken = localStorage.getItem('accessToken');

    // Create headers object with authorization header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    // Include headers in the HTTP request
    return this.http.get<Chaudiere[]>(`${this.baseUrl}/allchaudieres`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateChaudiere(id: number, request: Chaudiere): Observable<Chaudiere> {
    return this.http.put<Chaudiere>(`${this.baseUrl}/update/${id}`, request).pipe(
      catchError(this.handleError)
    );
  }

  deleteChaudiere(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
